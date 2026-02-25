// what the user is currently typing ( as text)
let typedNumberText = "";

// the number we store for calculations
let storedNumber = null;

// the operator currently selected ( + - * /)
let currentOperator = "";

// used only for displaying the history
let historyParts = [];

//------------------
// helper function
//------------------

function setStatus(message) {
  document.getElementById("statusLine").textContent = message;
}

function showSymbol(operator) {
  if (operator === "*") return "X";
  if (operator === "/") return "&#x00F7";
  if (operator === "-") return "&#x2212";
  return operator;
}

function updateScreen() {
  const display = document.getElementById("displayLine");
  const history = document.getElementById("historyLine");
  const status = document.getElementById("statusLine");

  display.textContent = typedNumberText;
}

function pressNumber(digit) {
  setStatus("");
  if (typedNumberText === "0") {
    typedNumberText = digit;
  } else {
    typedNumberText = typedNumberText + digit;
  }

 
}

function pressOperator(operator) {
  setStatus("");

  if (typedNumberText === "" && storedNumber === null) {
    setStatus("Type a Number First");
  }

  if (storedNumber === null) {
    storedNumber = Number(typedNumberText);
    currentOperator = operator
    historyParts = [String(storedNumber), currentOperator]
    typedNumberText = '';
  
   updateScreen();
  }
}
