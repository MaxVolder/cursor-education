const styles = document.createElement('style');
styles.innerHTML = `
  .key {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: lightgray;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
    transition: background-color 0.3s;
  }
  .playing {
    background-color: yellow;
  }
`;
document.head.appendChild(styles);


const div1 = document.createElement('div');
div1.classList.add('key');
div1.setAttribute('data-key', '65');
div1.textContent = 'A';

const div2 = document.createElement('div');
div2.classList.add('key');
div2.setAttribute('data-key', '83');
div2.textContent = 'S';

const div3 = document.createElement('div');
div3.classList.add('key');
div3.setAttribute('data-key', '68');
div3.textContent = 'D';

const div4 = document.createElement('div');
div4.classList.add('key');
div4.setAttribute('data-key', '70');
div4.textContent = 'F';

const div5 = document.createElement('div');
div5.classList.add('key');
div5.setAttribute('data-key', '71');
div5.textContent = 'G';

const div6 = document.createElement('div');
div6.classList.add('key');
div6.setAttribute('data-key', '72');
div6.textContent = 'H';

const div7 = document.createElement('div');
div7.classList.add('key');
div7.setAttribute('data-key', '74');
div7.textContent = 'J';

const div8 = document.createElement('div');
div8.classList.add('key');
div8.setAttribute('data-key', '75');
div8.textContent = 'K';

const div9 = document.createElement('div');
div9.classList.add('key');
div9.setAttribute('data-key', '76');
div9.textContent = 'L';

const container = document.getElementById('container');
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
container.appendChild(div7);
container.appendChild(div8);
container.appendChild(div9);


const audioMap = {
    '65': {
      soundFile: 'sounds/clap.wav',
      keyElement: document.querySelector('[data-key="65"]'),
    },
    '83': {
      soundFile: 'sounds/hihat.wav',
      keyElement: document.querySelector('[data-key="83"]'),
    },
    '68': {
      soundFile: 'sounds/kick.wav',
      keyElement: document.querySelector('[data-key="68"]'),
    },
    '70': {
      soundFile: 'sounds/OpenHiHat.wav',
      keyElement: document.querySelector('[data-key="70"]'),
    },
    '71': {
      soundFile: 'sounds/Snare1.wav',
      keyElement: document.querySelector('[data-key="71"]'),
    },
    '72': {
      soundFile: 'sounds/Ride.wav',
      keyElement: document.querySelector('[data-key="72"]'),
    },
    '74': {
      soundFile: 'sounds/melodic-tunedC04.wav',
      keyElement: document.querySelector('[data-key="74"]'),
    },
    '75': {
      soundFile: 'sounds/toms01.wav',
      keyElement: document.querySelector('[data-key="75"]'),
    },
    '76': {
      soundFile: 'sounds/melodic-tunedC03.wav',
      keyElement: document.querySelector('[data-key="76"]'),
    },
  };
  
  function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
  
  function handleKeyDown(event) {
    const key = event.keyCode.toString();
    const soundObj = audioMap[key];
  
    if (soundObj) {
      const { soundFile, keyElement } = soundObj;
      playSound(soundFile);
      keyElement.classList.add('playing');
  
      setTimeout(() => {
        keyElement.classList.remove('playing');
      }, 300);
    }
  }
  
  document.addEventListener('keydown', handleKeyDown);
  