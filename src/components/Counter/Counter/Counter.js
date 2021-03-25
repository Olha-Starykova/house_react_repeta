import React from 'react';
import Controls from './Controls';
 import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

    static propTypes = {
    //
  };
  
  state = {
    // value: 5,
    value: this.props.initialValue
  };

  // handleIncrement = () => {
  //   // console.log('клик+')
  //   // console.log(this)
  //   this.setState({
  //     value: 10
  //   });
  // };
handleIncrement = () => {
  //  this.setState({
  //      value: 10
  //    });
  
  this.setState(prevState => ({
        value: prevState.value + 1
     }));
  };


  handleDecrement = () => {
    console.log('клик-')
    console.log(this)
      this.setState(prevState => ({
        value: prevState.value - 1
     }));
  }
  
  render() {
    return (
      <div className="Counter">
        <Value
        value={this.state.value}
        />
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
         {/* <div className="Counter__cotrols">
          <button type="button" onClick={this.handleIncrement}>Увеличить на 1</button>
          <button type="button" onClick={this.handleDecrement}>Уменьшить на1</button>
         </div> */}
       </div>
    )
  }
};




export default Counter;