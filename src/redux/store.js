import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// //createStore(reducer, [preloadedState], [enhancer])

// //const reducer = (state = { f: 12 }, action) => state
// const reducer = (state = { f: 12 }, action) => {
//     console.log( "action",action)
//     return state
// } 

// const store = createStore(reducer, { f: 100 })

// export default store

const initialState = { counterValue: 10 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/Increment':
            return {
                counterValue: state.counterValue + action.payload
            }
         case 'counter/Decrement':
            return {
                counterValue: state.counterValue - action.payload
            }
        default: return state;
}
   
    
    
}
const store = createStore(reducer, composeWithDevTools());
export default store