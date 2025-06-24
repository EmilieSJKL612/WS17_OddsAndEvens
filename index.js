

const state = {
    inputValue: '',
    numberBank: [],
    oddNumbers: [],
    evenNumbers: [],
};


const root = document.createElement('div');
document.body.appendChild(root);


function isEven(n) {
    return n % 2 === 0;
}


// Em: goals: handle user input + store in state -> get the value the user typed into the input element 
// 1. https://www.w3schools.com/jsref/event_target.asp  2. https://www.w3schools.com/jsref/prop_text_value.asp
function handleInput(e){
    state.inputValue = e.target.value;
}


