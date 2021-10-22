new Vue({
  el: "#app",
  data: {
    inputArray: [],
    displayedNum: 0,
    firstNum: 0,
    secondNum: 0,
    symbol: "",
  },

  methods: {
    seven: function () {
      this.inputArray.push(7);
      this.inputArray = this.inputArray.join("");
    },
    times: function () {
      this.inputArray.push("x");
    },
    five: function () {
      this.inputArray.push(5);
    },
  },
  watch: {
    inputArray: function () {
      let stringArray = this.inputArray.toString();
      let comaRemoved = stringArray.replaceAll(",", "");

      if (this.inputArray.includes("x")) {
        this.firstNum = parseInt(comaRemoved);
        inputArray = [];
        console.log(this.firstNum);
      }
    },
  },
});
