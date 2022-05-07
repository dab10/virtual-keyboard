// import { Hello } from './var'; // CONNECT var.js, DON'T NEED LOADER
// import json from './assets/json.json'; // CONNECT json.json, DON'T NEED LOADER
// import xml from './assets/data.xml'; // CONNECT data.xml, NEED xml-loader
// import csv from './assets/data.csv'; // CONNECT data.csv, NEED csv-loader, papaparse
// import WebpackLogo from './assets/webpack-logo.png'; // CONNECT webpack-logo.png, NEED file-loader (type: 'asset/resource')
// import { internalIP } from 'webpack-dev-server';
import './styles/styles.css'; // CONNECT styles.css, NEED 'style-loader', 'css-loader'
import './styles/scss.scss'; // CONNECT scss.css, NEED 'sass-loader',

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const textareaKeyboard = document.createElement('textarea');
textareaKeyboard.classList.add('textareaWindow');
container.append(textareaKeyboard);

const divKeyboard = document.createElement('div');
divKeyboard.id = 'keyboard';
container.append(divKeyboard);

const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', '&nbsp;', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const keyboardKeyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'NumpadDecimal', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 56) {
      out += '<br>';
    }
    if (i === 13) {
        out += `<div class="keyboard-key keyboard-key-backspace" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else {
        out += `<div class="keyboard-key" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    }
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeydown = function (event) {
  document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
    element.classList.remove('active');
  });
  document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
  event.preventDefault();
};

document.onkeyup = function (event) {
  document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.remove('active');
  event.preventDefault();
};

document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
  element.onmousedown = function (event) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
      element.classList.remove('active');
    });
    const code = this.getAttribute('data');
    this.classList.add('active');
  };

  element.onmouseup = function (event) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
      element.classList.remove('active');
    });
    const code = this.getAttribute('data');
    this.classList.remove('active');
  };
});

// document.onkeyup = function (event) {
//     console.log(event);
//     keyboard.push(event.key);
//     console.log(keyboard);
// };
