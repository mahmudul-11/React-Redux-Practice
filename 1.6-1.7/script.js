// catach all DOM element
const displayText = document.getElementById('displaytext');
const incrementButton = document.getElementById('incrementbtn');
const decrementButton = document.getElementById('decrementbtn');

// Action Identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// Action Creator 
const increment = (value) =>{
    return{
        type: 'increment',
        payload: value 
    }
}

const decrement = (value) =>{
    return{
        type: 'decrement',
        payload: value 
    }
}

// initial State declear 
const initialState = {
    value:0,
 };

//  create a reducer function 
const counterReducer = (state = initialState, action) =>{
    if (action.type === 'increment'){
        return{
            ...state,
            value: state.value + action.payload,
        }
    } else if (action.type === 'decrement'){
        return{
            ...state,
            value: state.value - action.payload
        }
    } else return state;
}
// create  Redux Store 
const store = Redux.createStore(counterReducer);

const renderUI = () =>{
    const updatedState = store.getState(); 
    // getState is responsible for getting the state 
    displayText.innerText = updatedState.value.toString();
}
// If state change then subscriber will be called
store.subscribe(renderUI);

// update UI initially
renderUI();
incrementButton.addEventListener('click', ()=>{
    store.dispatch(increment(5))
})

decrementButton.addEventListener('click', ()=>{
    store.dispatch(decrement(1))
})