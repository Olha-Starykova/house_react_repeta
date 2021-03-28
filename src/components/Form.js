import React, { Component } from 'react';
  //ставим npm i shortid
  import shortid from 'shortid';

class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: "junior",
    };
//генерим там лежит уникалый индефикатор
     nameInputId = shortid.generate();
     tagInputId = shortid.generate();

    //общий метод для инпутов патерн для форм по внешнему виду контролируемій елемент
    hendelChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    };
    //сабмит
    hendelSubmit = e => { 
        e.preventDefault();
        // console.log(this.state)
        this.props.onSubmit(this.state)
        this.reset();
    };

    //сброс формы очистить стейт
  reset = () => {
    this.setState({
       name: '',
        tag: ''
          })
  }


    render() {
        return (

            <form onSubmit={this.hendelSubmit}>
                <label htmlFor={this.nameInputId}>
                    Имя <input type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.hendelChange}
                        id={this.nameInputId} />
                </label>
                <label htmlFor={this.tagInputId} >
                    Прозвище <input type="text"
                        name='tag'
                        value={this.state.tag}
                        onChange={this.hendelChange}
                        id={this.tagInputId} />
                </label>
                {/* ==========радио кнопки =experience: 'junior'==============*/}
                <p>Ваш уровень:</p>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'}
                    />
          Junior
        </label>

                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'}
                    />
          Middle
        </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'}
                    />
          Senior
        </label>

                <br />
       
                <button type='submit'>Оправить</button>
            </form>
        );
    }
}
export default Form;