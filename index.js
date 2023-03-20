let display = document.getElementById("display");

let errorPatterns = /.[%|*]./g ;

function addNum(val) {
    display.value = display.value + val;
}

document.addEventListener('keypress', function(e) {
    let regex = /[0-9+-/%*]/g;
    let keyPressed = e.key;
    if (regex.test(keyPressed)){
        addNum(e.key);
    }
})

function plusminus() {
    display.value = '-(' + display.value + ')';
}

function delNum() {
    let input = display.value;
    let arr = input.split('');
    arr.pop();
    let finalInput = arr.join('');
    display.value = finalInput;
}

function calculate() {
    if (display.value) {
        let inputVal = display.value;
        display.value = eval(display.value);
    }
    else {
        window.alert('Please enter some value.');
    }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    delNum();
  }
  if (e.key === 'Enter') {
    calculate();
  }
});

function clearScreen() {
    display.value = '';
}