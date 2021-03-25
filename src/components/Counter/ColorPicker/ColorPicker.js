import React, { Component } from 'react';
import './ColorPicker.css';


class ColorPicker extends Component {
    //называем индекс 0 и в мэп передаем индекс по нему добавляем класс дополнительный при активной кнопке
  state = {
    activeOptionIdx: 0,
  };
//поверх записываем новый индекс той кнопки, что нажимаем и кидает его в стейт
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

    makeOptionClassName = index => {
      //делаем базовый класс
    const optionClasses = ['ColorPicker__option'];
     //по условию добавляем класс
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
      const { label } = options[activeOptionIdx];
      //const {label} = this.props.options[this.state.activeOptionIdx] цвет и слово из массива!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1:20лекция
      //вычисляемое свойство на базе пропов и стейта и декструрезируем что нам надо 
console.log({label})

    return (
      <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            //добавляем слово из массива при клике==============================
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
                  style={{ backgroundColor: color }}
                  //регестрируем кнопку передаем инлайн функцию, кторая во время вызова вызовет активиндекс
                  //и через замыкание будет доступен индекс
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}


export default ColorPicker;