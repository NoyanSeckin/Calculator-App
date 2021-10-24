let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
/* Bir tane bug var. İşlem sonucu ekrana gelen sayının sonuna, başka sayılar eklenebiliyor. Bunu engellemek lazım */
//Basılan sembol butonları eşittir işareti gelene kadar tekrar basılır hale GELMESİN!
//Ekrandaki yazının, yeni sayı girilirken değişmesi, yeni sayıya eşit olması gerek.
const equalButton = document.getElementById("equal-btn");
const plusButton = document.getElementById("plus-btn");
const timesButton = document.getElementById("times-button");
const minusButton = document.getElementById("minus-button");
const divisionButton = document.getElementById("division-button");

function disableButton() {
  plusButton.disabled = true;
  timesButton.disabled = true;
  minusButton.disabled = true;
  divisionButton.disabled = true;
}

function enableButton() {
  plusButton.disabled = false;
  timesButton.disabled = false;
  minusButton.disabled = false;
  divisionButton.disabled = false;
}

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "+":
        display.innerText += e.target.innerText;
        disableButton();
        break;
      // case "*":
      //   // display.innerText += e.target.innerText;
      //   // disableButton();
      //   break;
      case "/":
        display.innerText += e.target.innerText;
        disableButton();
        break;
      case "-":
        display.innerText += e.target.innerText;
        disableButton();
        break;

      case "RESET":
        display.innerText = "";
        enableButton();
        break;
      case "DEL":
        // let delArray = Array.from(display.innerText);
        // for (let i = 0; i < delArray.length; i++) {
        //   let currentElement = delArray[i];
        //   parseInt(currentElement);
        //   if (isNaN(currentElement)) {
        //     enableButton();
        //   }
        // }

        display.innerText = display.innerText.slice(
          0,
          display.innerText.length - 1
        );
        let lastItem = display.innerText.slice(display.innerText.length - 1);
        if (lastItem == "+") {
          enableButton();
          console.log(lastItem);
        }

        break;
      case "=":
        // Bu calculate arrayini sembol ayıklamak için yazdım
        let calculateArray = Array.from(display.innerText);
        let mathSymbol = "+";
        for (let i = 0; i < calculateArray.length; i++) {
          mathSymbol = calculateArray[i];
          if (mathSymbol == "+") {
            let numsArray = display.innerText.split("+");
            let num1 = parseFloat(numsArray[0]);
            let num2 = parseFloat(numsArray[1]);
            display.innerText = num1 + num2;
            console.log(num1 + num2);
          } else if (mathSymbol == "*") {
            console.log("Sembol +");
            let numsArray = display.innerText.split("*");
            let num1 = parseFloat(numsArray[0]);
            let num2 = parseFloat(numsArray[1]);
            display.innerText = num1 * num2;
            console.log(num1 * num2);
          } else if (mathSymbol == "-") {
            console.log("Sembol +");
            let numsArray = display.innerText.split("-");
            let num1 = parseFloat(numsArray[0]);
            let num2 = parseFloat(numsArray[1]);
            display.innerText = num1 - num2;
            console.log(num1 - num2);
          } else if (mathSymbol == "/") {
            console.log("Sembol +");
            let numsArray = display.innerText.split("/");
            let num1 = parseFloat(numsArray[0]);
            let num2 = parseFloat(numsArray[1]);
            display.innerText = num1 / num2;
            console.log(num1 / num2);
          }
        }
        enableButton();
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
