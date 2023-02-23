import React from 'react';

import Icon from './Icon';

const InputGroup = ({ label: { left, right }, className, detachInput, icon, children }) => {
  return (
    <div className="input-container">
      <div className="input-header">
        <span className="input-title">{left}</span>
        <span className="input-title">{right}</span>
      </div>
      <div className="input-body">
        {detachInput ? children : <div className={className}>{children}</div>}
        {icon ? <Icon icon={icon} /> : ''}
      </div>
    </div>
  );
};

export default InputGroup;
