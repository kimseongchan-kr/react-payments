import React from 'react';
import Input from '../common/Input';

const ConnectedInput = ({ name, sign, count, input, ...props }) => {
  return Array.from({ length: count }).map((_, index) => {
    if (input) {
      return (
        <>
          <Input key={name + index} name={name + index} {...props} {...input[index]} />
          {index != count - 1 ? sign : ''}
        </>
      );
    }

    return (
      <>
        <Input key={name + index} name={name + index} {...props} />
        {index != count - 1 ? sign : ''}
      </>
    );
  });
};

export default ConnectedInput;
