import React from 'react';

import Icon from './Icon';

const InputGroup = ({ label: { leftLabel, rightLabel }, className, detachInput, icon, children }) => {
  return (
    <div className="input-container">
      <div className="input-header">
        <span className="input-title">{leftLabel}</span>
        <span className="input-title">{rightLabel}</span>
      </div>
      <div className="input-body">
        {detachInput ? <div className={className}>{children}</div> : children}
        {<Icon icon={icon} />}
      </div>
    </div>
  );
};

export default InputGroup;
