const container = document.getElementById('container');
const styles = document.getElementById('styles');


styles.innerHTML = `
  #container {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(5, 50px);
    gap: 2px;
  }
  
  .square {
    width: 50px;
    height: 50px;
    background-color: #000;
  }
`;

function generateBlocks() {
  const colors = generateRandomColors(25);

  for (let i = 0; i < 25; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = colors[i];
    container.appendChild(square);
  }
};

function generateBlocksInterval() {
  generateBlocks();
  setInterval(changeColors, 1000);
};

function generateRandomColors(count) {
  const colors = [];

  for (let i = 0; i < count; i++) {
    const randomColor = getRandomColor();
    colors.push(randomColor);
  }

  return colors;
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

function changeColors() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    const newColor = getRandomColor();
    square.style.backgroundColor = newColor;
  });
};

// Виклик функції відповідно до ДЗ
generateBlocksInterval();
