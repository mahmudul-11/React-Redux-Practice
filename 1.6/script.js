// catach all DOM element
const displayText = document.getElementById('displaytext');
const incrementButton = document.getElementById('incrementbtn');
const decrementButton = document.getElementById('decrementbtn')

// initial State declear 
const initialState = {
    value:0,
 };

//  create a reducer function 
const counterReducer = (state = initialState, action) =>{
    if (action.type === 'increment'){
        return{
            ...state,
            value: state.value + 1,
        }
    } else if (action.type === 'decrement'){
        return{
            ...state,
            value: state.value - 1
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
    store.dispatch({
        type: 'increment'
    })
})

decrementButton.addEventListener('click', ()=>{
    store.dispatch({
        type: 'decrement'
    })
})