import React from 'react';

import { icons } from './shared/icons';

const Icon = ({ icon, ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      {icons[icon]}
    </svg>
  );
};

export default Icon;
