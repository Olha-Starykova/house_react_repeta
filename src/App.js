// import React, { Component } from 'react';
// import Counter from './components/Counter/Counter/Counter';
//  //import Counter from './components/Counter/Counter';
// // import Dropdown from './components/Counter/Dropdown';
// // import ColorPicker from './components/Counter/ColorPicker';
// import TodoList from './components/TodoList';
// import Form from './components/Form';
// import initialTodos from './todos.json';
// import TodoEditor from './components/TodoEditor/TodoEditor'
// import shortid from 'shortid';
// import Filter from './components/Filter'
// import Modal from './components/Modal'
//  import ArticlesView from './views/ArticlesView';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// class App extends Component {
//   state = {
//     //храним массив
//     todos: initialTodos,
//        // inputValue: "123"
//     filter: '',
//     showModal: false
//   };

//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal
//     }));
//   }
//   //во время сабмита получить данные текст, для єтого передаем как
//   //проп для формы TodoEditor, назовем онсабмит и во время сабмита мы это вызовем
//   //как this.props.onSubmit(this.state.message)
//   addTodo = text => {
//     //проверяем работу
//     // console.log(text)

//     const todo = {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     }
//   //обновляем состояние от предыдущего добавляем элемент, а стейте арр идет обновление
//     this.setState(prevState => ({
//       todos: [todo, ...prevState.todos],
//     })
//     );
//     // this.setState(({ todos }) => ({
//     //   todos: [todo, ...todos],
//     // }));
//   };

// //метод для удаления по id/ работа с коллекцией выкидываем елемент id которого совпадает
//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   // hendelInputChange = event => {
//   //   console.log(event.target.value);
//   //   this.setState({inputValue: event.target.value})
//   // }
// //метод поднятия состояния для формы, что б получить ответ сабмит в арр
//   formSubmitHandler = data => {
//     console.log(data)
//   }
//    toggleCompleted = todoId => {
//         // console.log(todoId)
//     // this.setState(prevState => ({
//     //   todos: prevState.todos.map(todo => {
//     //     if (todo.id === todoId) {
//     //       return {
//     //         ...todo,
//     //         completed: !todo.completed,
//     //       };
//     //     }

//     //     return todo;
//     //   }),
//     // }));
// //запись иначе
//     this.setState(({ todos }) => ({
//       todos: todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
//       ),
//     }));
//   };

//    changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//    };
  
//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(normalizedFilter),
//     );
//   };

//     calculateCompletedTodos = () => {
//     const { todos } = this.state;

//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );
//   };


//   componentDidMount() {
//      console.log('App componentDidMount');

//     const todos = localStorage.getItem('todos');
//     const parsedTodos = JSON.parse(todos);
// //переписать поверх
//     if (parsedTodos) {
//       this.setState({ todos: parsedTodos });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//      console.log('App componentDidUpdate');
// //старый массив
//     console.log(prevState);
//     //новый массив
//     console.log(this.state)
//     const nextTodos = this.state.todos;
//     const prevTodos = prevState.todos;

//     if (nextTodos !== prevTodos) {
//       console.log('Обновилось поле todos, записываю todos в хранилище');
//       localStorage.setItem('todos', JSON.stringify(nextTodos));
//     }

//     // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
//     //   this.toggleModal();
//     // }
//   }

//   render() {
//     const { todos, filter, showModal } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     // const completedTodoCount = todos.reduce(
//     //   (total, todo) => (todo.completed ? total + 1 : total),
//     //   0,
//     // );

//     const visibleTodos = this.getVisibleTodos();
//      //тоглит свойства в массиве обьектов
//      //todo нам приходит из чекбокса и мы делаем новый 
//      // обьект с изменениями на основе старого
   
//     return (
//       <>
//           <ArticlesView />
//         {/* <Container></Container> */}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.hendelInputChange }/> */}
//         {/* это не метод onSubmit просто так назвали проп для финальных данных  */}
//         <Form onSubmit={this.formSubmitHandler} />
//         {/* у второго компонента Form будут другие id */}
//         <Form onSubmit={this.formSubmitHandler} />
//         <TodoEditor onSubmit={this.addTodo} />
//         {/* фильрация */}
//         {/* <label>
//           Фильтр по имени
//           <input type="text"
//             value={this.state.filter}
//             onChange={this.changeFilter} />
//         </label> */}
//             <Filter value={filter} onChange={this.changeFilter} />

//         {/* <h1>Состояние компонента</h1> */}

//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>
//         {/* //передаем пропсы для удаления от родителей к детям */}
//         <TodoList
//           // todos={todos}
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted} 
//         />
        
//         <button type="button" onClick={this.toggleModal}> открыть модальное окно </button>
//         //this.props.onClose передаем
//         {showModal && <Modal  onClose={this.toggleModal}>
//           <p>Привет это children</p>
//              <button type="button" onClick={this.toggleModal}> закрыть модальное окно </button>
//         </Modal>}
//       </>
//     );
//   }
// }

// export default App;


//часть вторая Router

import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView'

const App = () =>
  <>
    <ul>
      <li><Link to='/'>Домашняя</Link></li>  
      <li><Link to='/authors'>Авторы</Link></li>
      <li><Link to='/books'>Книги</Link></li>
  {/* <li><Link to='/books'>Книги</Link></li>  */}
    </ul>

 <Switch>
    <Route exact path='/' component={HomeView} />
    <Route path='/authors' component={AuthorsView} />
    <Route exact path="/books" component={BooksView} />
    <Route component={NotFoundView} />
    </Switch>
  </>

export default App;


