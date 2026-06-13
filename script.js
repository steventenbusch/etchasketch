const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-button");

function createGrid(size) {
  container.innerHTML = "";
  container.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.classList.add("filled");
    });
    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  const size = Number(prompt("How many squares per side?"));

  if (size > 0) {
    createGrid(size);
  }
});

createGrid(16);
