

const state = {
    inputValue: '',
    numberBank: [],
    oddNumbers: [],
    evenNumbers: [],
};


const root = document.createElement('div');
document.body.appendChild(root);


//Em: stra: use modulo to check odd or even
function isEven(n) {
    return n % 2 === 0;
}


// Em: goals: handle user input + store in state -> get the value the user typed into the input element 
// 1. https://www.w3schools.com/jsref/event_target.asp  2. https://www.w3schools.com/jsref/prop_text_value.asp
function handleInput(e){
    state.inputValue = e.target.value;
}


//Em: encountered: 1. clicked "Add number" button and all the previous number(s) entered were wipe out   2. accidently entered a symbol not number... how to prevent??
// 1. https://www.w3schools.com/jsref/event_preventdefault.asp  2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function handleAddNumber(e){
    e.preventDefault();
    const number = parseInt(state.inputValue, 10);
    if (!isNaN(number)){
        state.numberBank.push(number);
        state.inputValue = '';
        render();
    }
}


function handleSortOne(){
    const number = state.numberBank.shift();
    if (number !== undefined){
        if (isEven(number)){
            state.evenNumbers.push(number);
        }
        else {
            state.oddNumbers.push(number);
        }
        render();
    }
}


//Em: should ensure length is greater than 0 and set as while loop condition
function handleSortAll(){
    while (state.numberBank.length > 0){
        const number = state.numberBank.shift();
        if (isEven(number)){
            state.evenNumbers.push(number);
        }
        else {
            state.oddNumbers.push(number);
        }
    }
    render();
}

// 1. https://www.w3schools.com/js/js_htmldom_eventlistener.asp  2. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
function InputForm(){
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type = "number";
    input.value = state.inputValue;
    input.addEventListener("input", handleInputChange);
  
    const addButton = document.createElement("button");
    addButton.textContent = "Add number";
    addButton.type = "submit";
  
    form.appendChild(input);
    form.appendChild(addButton);
    form.addEventListener("submit", handleAddNumber);
  
    return form;
}


// https://www.w3schools.com/js/js_htmldom_eventlistener.asp 
function ButtonPanel(){
    const div = document.createElement("div");

    const sortOneBtn = document.createElement("button");
    sortOneBtn.textContent = "Sort 1";
    sortOneBtn.addEventListener("click", handleSortOne);

    const sortAllBtn = document.createElement("button");
    sortAllBtn.textContent = "Sort All";
    sortAllBtn.addEventListener("click", handleSortAll);
  
    div.appendChild(sortOneBtn);
    div.appendChild(sortAllBtn);

    return div;

}

function NumberList(title, numbers){
    const section = document.createElement("div");
    section.className = "section";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const list = document.createElement("ul");
    // Em: stra: use for each loop here to call a function for each element - check ?
    numbers.forEach(num) => {
        const li = document.createElement("li");
        li.textContent = num;
        list.appendChild(li);
    });

    section.appendChild(heading);
    section.appendChild(list);

    return section;
}


function render(){
    root.innerHTML = "";
    root.className = "container";
  
    root.appendChild(InputForm());
    root.appendChild(ButtonPanel());
    root.appendChild(NumberList("Number Bank", state.numberBank));
    root.appendChild(NumberList("Odd Numbers", state.oddNumbers));
    root.appendChild(NumberList("Even Numbers", state.evenNumbers));
}


render();
