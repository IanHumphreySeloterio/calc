const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        display.value = eval(result);
    }
    catch(error) {
        display.value = "Error";
    }
}