function* createIdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value); // 1
console.log(idGenerator.next().value); // 2
console.log(idGenerator.next().value); // 3

function* newFontGenerator(initialFontSize) {
  let fontSize = initialFontSize;
  while (true) {
    const change = yield fontSize;
    if (change === "up") {
      fontSize += 2;
    } else if (change === "down") {
      fontSize -= 2;
    }
    document.getElementById("text").style.fontSize = `${fontSize}px`;
  }
}

const fontGenerator = newFontGenerator(14);

// document.getElementById("text").addEventListener("click", function () {
//   const direction = fontGenerator.next(
//     this.style.fontSize === "14px" ? "up" : "down"
//   ).value;
//   console.log(`Current font size: ${direction}px`);
// });
document.getElementById("increase").addEventListener("click", function () {
  const direction = fontGenerator.next("up").value;
  console.log(`Current font size: ${direction}px`);
});

document.getElementById("decrease").addEventListener("click", function () {
  const direction = fontGenerator.next("down").value;
  console.log(`Current font size: ${direction}px`);
});
fontGenerator.next("up").value;
fontGenerator.next("up").value;
fontGenerator.next().value;
fontGenerator.next("down").value;
fontGenerator.next("down").value;
fontGenerator.next("down").value;
fontGenerator.next().value;
