import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
//import {myAction} from "./redux/actions"
import {Provider} from "react-redux"
import App from './App';

//console.log(store.getState())
// Object
// dispatch: ƒ dispatch(action)=  отправить дейстрия(myAction) для редюсера
// getState: ƒ getState() = наш стейт
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()
// __proto__: Object

// console.log(store.dispatch(myAction))
//store.dispatch(myAction(5))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

