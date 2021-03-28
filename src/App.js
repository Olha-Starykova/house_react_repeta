import React, { Component } from 'react';
import Counter from './components/Counter/Counter/Counter';
 //import Counter from './components/Counter/Counter';
// import Dropdown from './components/Counter/Dropdown';
// import ColorPicker from './components/Counter/ColorPicker';
import TodoList from './components/TodoList';
import Form from './components/Form';
import initialTodos from './todos.json';
import TodoEditor from './components/TodoEditor/TodoEditor'
import shortid from 'shortid';
 import Filter from './components/Filter'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    //храним массив
    todos: initialTodos,
       // inputValue: "123"
    filter: ''
  };
  //во время сабмита получить данные текст, для єтого передаем как
  //проп для формы TodoEditor, назовем онсабмит и во время сабмита мы это вызовем
  //как this.props.onSubmit(this.state.message)
  addTodo = text => {
    //проверяем работу
    // console.log(text)

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    }
  //обновляем состояние от предыдущего добавляем элемент, а стейте арр идет обновление
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    })
    );
    // this.setState(({ todos }) => ({
    //   todos: [todo, ...todos],
    // }));
  };

//метод для удаления по id/ работа с коллекцией выкидываем елемент id которого совпадает
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // hendelInputChange = event => {
  //   console.log(event.target.value);
  //   this.setState({inputValue: event.target.value})
  // }
//метод поднятия состояния для формы, что б получить ответ сабмит в арр
  formSubmitHandler = data => {
    console.log(data)
  }
   toggleCompleted = todoId => {
        // console.log(todoId)
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));
//запись иначе
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
   };
  
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

    calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };


  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

    const visibleTodos = this.getVisibleTodos();
     //тоглит свойства в массиве обьектов
     //todo нам приходит из чекбокса и мы делаем новый 
     // обьект с изменениями на основе старого
   
    return (
      <>
          
        {/* <Container></Container> */}
        {/* <input type="text" value={this.state.inputValue} onChange={this.hendelInputChange }/> */}
        {/* это не метод onSubmit просто так назвали проп для финальных данных  */}
        <Form onSubmit={this.formSubmitHandler} />
        {/* у второго компонента Form будут другие id */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <TodoEditor onSubmit={this.addTodo} />
        {/* фильрация */}
        {/* <label>
          Фильтр по имени
          <input type="text"
            value={this.state.filter}
            onChange={this.changeFilter} />
        </label> */}
            <Filter value={filter} onChange={this.changeFilter} />

        <h1>Состояние компонента</h1>

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        {/* //передаем пропсы для удаления от родителей к детям */}
        <TodoList
          // todos={todos}
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App; 