let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

/* Bir tane bug var. İşlem sonucu ekrana gelen sayının sonuna, başka sayılar eklenebiliyor. Bunu engellemek lazım */

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "DEL":
        display.innerText = display.innerText.slice(
          0,
          display.innerText.length - 1
        );
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        console.log(e.target.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
