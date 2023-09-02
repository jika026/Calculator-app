(() => {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".btn");
  const equals = document.querySelector(".equals");
  const clears = document.querySelector(".clear");
  const clearOne = document.querySelector(".clearOne");
  const decimal = document.querySelector(".point");
  const funcKey = document.querySelectorAll(".special");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;

      if (value !== "=") {
        screen.value += value;
      }
    });
  });

  clears.addEventListener("click", () => {
    screen.value = "";
  });
  clearOne.addEventListener("click", () => {
    let variable = screen.value.slice(0, -1);
    screen.value = variable;
  });
  equals.addEventListener("click", () => {
    let maths = eval(screen.value);

    screen.value = maths;
  });
})();
