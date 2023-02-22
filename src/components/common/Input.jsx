import React from 'react';

const DIGIT = 'Digit';
const KEY = 'key';

const Input = ({ maxLength, onlyNumber, ...props }) => {
  const onKeyDown = (event) => {
    const inputValue = event.target.value;
    const inputCode = event.code;

    if (inputCode.indexOf(DIGIT) === -1 && inputCode.indexOf(KEY) === -1) {
      return;
    }

    if (inputValue.length > maxLength - 1) {
      event.preventDefault();
    }
  };

  const onBeForeInput = (event) => {
    const inputData = event.data;

    if (isNaN(inputData) && onlyNumber) {
      event.preventDefault();
    }
  };

  const onKeyUp = (event) => {
    console.log(event.target.value);
  };

  return <input onKeyDown={onKeyDown} onBeforeInput={onBeForeInput} onKeyUp={onKeyUp} {...props} />;
};

export default Input;
