import './styles/styles.css';
import './styles/scss.scss';

document.body.classList.add('body');

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const title = document.createElement('h1');
title.innerHTML = 'RSS Virtual Keyboard for Windows';
title.classList.add('title');
container.append(title);

const textareaKeyboard = document.createElement('textarea');
textareaKeyboard.cols = '50';
textareaKeyboard.rows = '5';
textareaKeyboard.classList.add('textareaWindow');
container.append(textareaKeyboard);

const divKeyboard = document.createElement('div');
divKeyboard.id = 'keyboard';
container.append(divKeyboard);

const langChange = document.createElement('div');
langChange.innerHTML = 'Change language: left Ctrl';
langChange.classList.add('langChange');
container.append(langChange);

const keyboardRuEn = [
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
  [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
];

const keyboardUpperCaseCapsLockRuEn = [
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
  [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
];

const keyboardUpperCaseCapsLockShiftRuEn = [
  [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Delete',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
  [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Delete',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
];

const keyboardUpperCaseRuEn = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
  [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'Shift',
    'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
  ],
];

const keyboardKeyCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

let langRu = false;

let keyboard = [];
let keyboardUpperCaseCapsLock = [];
let keyboardUpperCaseCapsLockShift = [];
let keyboardUpperCase = [];

const init = () => {
  if (!langRu) {
    const index = 0;
    keyboard = keyboardRuEn[index];
    keyboardUpperCaseCapsLock = keyboardUpperCaseCapsLockRuEn[index];
    keyboardUpperCaseCapsLockShift = keyboardUpperCaseCapsLockShiftRuEn[index];
    keyboardUpperCase = keyboardUpperCaseRuEn[index];
  } else {
    const index = 1;
    keyboard = keyboardRuEn[index];
    keyboardUpperCaseCapsLock = keyboardUpperCaseCapsLockRuEn[index];
    keyboardUpperCaseCapsLockShift = keyboardUpperCaseCapsLockShiftRuEn[index];
    keyboardUpperCase = keyboardUpperCaseRuEn[index];
  }

  let out = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += '<br>';
    }
    if (i === 13) {
      out += `<div class="keyboard-key keyboard-key-backspace" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 14) {
      out += `<div class="keyboard-key keyboard-key-tab" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 28 || i === 53 || i === 55 || i === 56 || i === 57 || (i >= 59 && i <= 63)) {
      out += `<div class="keyboard-key keyboard-key-del" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 29) {
      out += `<div class="keyboard-key keyboard-key-caps-lock" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 42) {
      out += `<div class="keyboard-key keyboard-key-shiftleft" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 54) {
      out += `<div class="keyboard-key keyboard-key-shiftright" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 41) {
      out += `<div class="keyboard-key keyboard-key-enter" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 58) {
      out += `<div class="keyboard-key keyboard-key-space" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else {
      out += `<div class="keyboard-key" data-set="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    }
    document.querySelector('#keyboard').innerHTML = out;
  }
};

init();
let keysdown = true;

const keydownActive = (event) => {
  if (!document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`)) return;

  if (event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'CapsLock') {
    document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.add('active');
  }

  event.preventDefault();
  if (event.code === 'Backspace') {
    const startPos = textareaKeyboard.selectionStart;
    if (startPos > 0) {
      textareaKeyboard.setRangeText('', startPos - 1, startPos, 'end');
    }
  } else if (event.code === 'Tab') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('    ', startPos, startPos, 'end');
  } else if (event.code === 'Enter') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('\n', startPos, startPos, 'end');
  } else if (event.code === 'Delete') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('', startPos, startPos + 1, 'end');
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (event.repeat !== undefined) { keysdown = !event.repeat; }
    if (!keysdown) return;
    keysdown = false;
    document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.add('active');
  } else if (event.code === 'CapsLock') {
    if (event.repeat !== undefined) { keysdown = !event.repeat; }
    if (!keysdown) return;
    keysdown = false;
    document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.toggle('active');
  } else if (event.code === 'ControlLeft') {
    if (event.repeat !== undefined) { keysdown = !event.repeat; }
    if (!keysdown) return;
    keysdown = false;

    if (langRu === false) {
      langRu = true;
      init();

      document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.add('active');
      return;
    }

    langRu = false;
    init();
    document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.add('active');
  } else if (event.code === 'ControlRight' || event.code === 'AltRight' || event.code === 'AltLeft') {
    textareaKeyboard.value += '';
  } else if (event.code === 'MetaLeft') {
    textareaKeyboard.value += '';
  } else if (event.code === 'Space') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText(' ', startPos, startPos, 'end');
  } else {
    const sPos = textareaKeyboard.selectionStart;
    const backspaceKey = textareaKeyboard.value;
    let text = '';
    text += document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).innerHTML;

    textareaKeyboard.value = backspaceKey.substring(0, sPos) + text + backspaceKey.substring(sPos);
    const pos = textareaKeyboard.value.indexOf(document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).innerHTML, sPos);
    textareaKeyboard.setRangeText(document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).innerHTML, pos, pos + 1, 'end');
  }
};

document.addEventListener('keydown', (event) => {
  if (event.repeat !== undefined) { keysdown = !event.repeat; }
  if (!keysdown) return;
  keysdown = false;

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal1 = element;
      elLocal1.innerHTML = keyboardUpperCase[index];
    });
  }

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal2 = element;
      elLocal2.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if (!(event.code === 'ShiftLeft' && event.code === 'ShiftRight') && (event.code === 'CapsLock')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal3 = element;
      elLocal3.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }

  if (event.code === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal4 = element;
      elLocal4.innerHTML = keyboard[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.code === 'CapsLock')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal5 = element;
      elLocal5.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.code === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal6 = element;
      elLocal6.innerHTML = keyboardUpperCase[index];
    });
  }
});

document.addEventListener('keyup', (event) => {
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal7 = element;
      elLocal7.innerHTML = keyboard[index];
    });
  }

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal8 = element;
      elLocal8.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }
});

document.onkeydown = keydownActive;

const keyupActive = (event) => {
  keysdown = true;
  if (!document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`)) return;

  if (event.code !== 'CapsLock') {
    document.querySelector(`#keyboard .keyboard-key[data-set="${event.code}"]`).classList.remove('active');
  }
  event.preventDefault();
};

document.onkeyup = keyupActive;

const mousedownActive = (e) => {
  textareaKeyboard.focus();

  if (e.target.classList.contains('container') || e.target.id === 'keyboard' || e.target.classList.contains('body') || e.target.classList.contains('title') || e.target.classList.contains('langChange')) {
    return false;
  }

  if (e.target.dataset.set !== 'ShiftLeft' && e.target.dataset.set !== 'ShiftRight' && e.target.dataset.set !== 'CapsLock' && !e.target.classList.contains('textareaWindow') && !e.target.classList.contains('title') && !e.target.classList.contains('langChange')) {
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.add('active');
  }

  if (e.target.dataset.set === 'Backspace') {
    const startPos = textareaKeyboard.selectionStart;
    if (startPos > 0) {
      textareaKeyboard.setRangeText('', startPos - 1, startPos, 'end');
      textareaKeyboard.focus();
    }
  } else if (e.target.dataset.set === 'Tab') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('    ', startPos, startPos, 'end');
    textareaKeyboard.focus();
  } else if (e.target.dataset.set === 'Enter') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('\n', startPos, startPos, 'end');
    textareaKeyboard.focus();
  } else if (e.target.dataset.set === 'Delete') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('', startPos, startPos + 1, 'end');
    textareaKeyboard.focus();
  } else if (e.target.dataset.set === 'ShiftLeft' || e.target.dataset.set === 'ShiftRight') {
    textareaKeyboard.value += '';
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.add('active');
  } else if (e.target.dataset.set === 'CapsLock') {
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.toggle('active');
    textareaKeyboard.value += '';
  } else if (e.target.dataset.set === 'ControlLeft') {
    if (langRu === false) {
      init();
      langRu = true;
      document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.add('active');
      return langRu;
    }

    init();
    langRu = false;
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.add('active');
    return langRu;
  } else if (e.target.dataset.set === 'AltLeft' || e.target.dataset.set === 'AltRight' || e.target.dataset.set === 'ControlRight') {
    textareaKeyboard.value += '';
  } else if (e.target.dataset.set === 'MetaLeft') {
    textareaKeyboard.value += '';
  } else if (e.target.dataset.set === 'Space') {
    const startPos = textareaKeyboard.selectionStart;

    textareaKeyboard.setRangeText(' ', startPos, startPos, 'end');
    textareaKeyboard.focus();
  } else {
    if (e.target.classList.contains('textareaWindow')) {
      return undefined;
    }

    const sPos = textareaKeyboard.selectionStart;
    const backspaceKey = textareaKeyboard.value;
    let text = '';
    text += document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).innerHTML;

    textareaKeyboard.value = backspaceKey.substring(0, sPos) + text + backspaceKey.substring(sPos);
    const pos = textareaKeyboard.value.indexOf(document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).innerHTML, sPos);
    textareaKeyboard.setRangeText(document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).innerHTML, pos, pos + 1, 'end');
    textareaKeyboard.focus();
  }
  return false;
};

textareaKeyboard.focus();

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('container') || event.target.id === 'keyboard' || event.target.classList.contains('textareaWindow') || event.target.classList.contains('body')) {
    return;
  }

  if ((event.target.dataset.set === 'ShiftLeft' || event.target.dataset.set === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal9 = element;
      elLocal9.innerHTML = keyboardUpperCase[index];
    });
  }

  if ((event.target.dataset.set === 'ShiftLeft' || event.target.dataset.set === 'ShiftRight') && (document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal10 = element;
      elLocal10.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if (event.target.dataset.set === 'CapsLock' && !document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal11 = element;
      elLocal11.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }

  if (event.target.dataset.set === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal12 = element;
      elLocal12.innerHTML = keyboard[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.target.dataset.set === 'CapsLock')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal13 = element;
      elLocal13.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.target.dataset.set === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal14 = element;
      elLocal14.innerHTML = keyboardUpperCase[index];
    });
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('container') || event.target.id === 'keyboard' || event.target.classList.contains('textareaWindow') || event.target.classList.contains('body')) {
    return false;
  }

  if ((event.target.dataset.set === 'ShiftLeft' || event.target.dataset.set === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal15 = element;
      elLocal15.innerHTML = keyboard[index];
    });
  }

  if ((event.target.dataset.set === 'ShiftLeft' || event.target.dataset.set === 'ShiftRight') && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal16 = element;
      elLocal16.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }
  return false;
});

document.onmousedown = mousedownActive;

const mouseupActive = (e) => {
  textareaKeyboard.focus();

  if (e.target.classList.contains('container') || e.target.id === 'keyboard' || e.target.classList.contains('textareaWindow') || e.target.classList.contains('body')) {
    return false;
  }

  if (e.target.dataset.set !== 'CapsLock' && !e.target.classList.contains('title') && !e.target.classList.contains('langChange')) {
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.remove('active');
    return false;
  }
  return false;
};

const mouseupActiveOut = (e) => {
  if (!document.querySelector('.body')) { return; }
  if ((e.target.dataset.set === 'ShiftLeft' || e.target.dataset.set === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      const elLocal17 = element;
      elLocal17.innerHTML = keyboard[index];
    });
  }

  if (e.target.classList.contains('container') || e.target.id === 'keyboard' || e.target.classList.contains('textareaWindow') || e.target.classList.contains('body')) {
    return;
  }

  if (e.target.dataset.set !== 'CapsLock' && !e.target.classList.contains('title') && !e.target.classList.contains('langChange')) {
    document.querySelector(`#keyboard .keyboard-key[data-set="${e.target.dataset.set}"]`).classList.remove('active');
  }
};

document.onmouseup = mouseupActive;
document.onmouseout = mouseupActiveOut;



document.body.onselectstart = () => false;
