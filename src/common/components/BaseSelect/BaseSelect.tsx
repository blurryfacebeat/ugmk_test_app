import React from 'react';

import { IBaseSelectProps } from './BaseSelect.types';

const BaseSelect = (props: IBaseSelectProps) => {
  const { name, options, selectedValue, onChange, ...otherProps } = props;

  return (
    <select
      onChange={(event) => onChange(event.target.value)}
      name={name}
      {...otherProps}
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value} selected={selectedValue === value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;
