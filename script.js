let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
/* Bir tane bug var. İşlem sonucu ekrana gelen sayının sonuna, başka sayılar eklenebiliyor. Bunu engellemek lazım */
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

/*display ekranında bir işaret olup olmadığını
 (String(checkArray[i]) === "NaN") ayarında bir şey kullanarak yapabilirim. Böylelikle del tuşuna basıldığında sembol butonları
 dinamik olarak disable/enable olabilir*/

//This function calculates the inner text of a given string value
function calculate(str) {
  let strArray = Array.from(str);
  let checkArray = [];
  for (let i = 0; i < strArray.length; i++) {
    checkArray.push(Number(strArray[i]));
    if (String(checkArray[i]) === "NaN") {
      //The math symbol in the str parameter is revealed
      const arSymbol = strArray[i];
      //Numbers from strArray
      let num1 = Number(strArray.slice(0, i).join().replaceAll(",", ""));
      let num2 = Number(
        strArray
          .slice(i + 1)
          .join()
          .replaceAll(",", "")
      );
      switch (arSymbol) {
        case "*":
          str = String(num1 * num2);
          break;
        case "+":
          str = String(num1 + num2);
          break;
        case "/":
          str = String(num1 / num2);
          break;
        case "-":
          str = String(num1 - num2);
          break;
        default:
          console.log("DEFAULT");
          break;
      }
    }
  }
  return str;
}

//Disable button yapmakta geç kalıyor. Nan'ı bir sonraki button clickte görüyor
function checkNan(str) {
  let strArray = Array.from(str);
  let checkArray = [];
  let stringArray = [];

  for (let i = 0; i < strArray.length; i++) {
    checkArray.push(Number(strArray[i]));
    stringArray.push(String(checkArray[i]));
  }
  if (stringArray.includes("NaN")) {
    disableButton();
  } else enableButton();
}

//EVENTS BEGIN

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    //this nested if statement checks whether a button's innerhtml equals to NaN, other than RESET and DEl. That way, I am able to distinguish mathematical symbols and disable their buttons, for convenience.
    if (
      e.target.innerText !== "RESET" &&
      e.target.innerText !== "DEL" &&
      e.target.innerText !== "."
    ) {
      if (String(Number(e.target.innerText)) === "NaN") {
        disableButton();
        console.log(String(Number(e.target.innerText)));
      }
    }
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        enableButton();
        break;
      case "DEL":
        //Del works fine. If a math symbol is deleted, their buttons get reactivated.
        let displayArray = [];
        displayArray = Array.from(display.innerText);
        let lastItem = displayArray.pop();
        console.log(String(Number(lastItem)));
        if (String(Number(lastItem)) === "NaN") {
          enableButton();
          console.log(lastItem);
        }
        display.innerText = display.innerText.slice(
          0,
          display.innerText.length - 1
        );

        break;
      case "=":
        //Bu eşleştirmeye bayılıyorum
        display.innerText = calculate(display.innerText);
        enableButton();
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
