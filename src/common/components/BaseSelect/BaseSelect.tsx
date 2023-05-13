import React from 'react';

import { IBaseSelectProps } from './BaseSelect.types';

const BaseSelect = (props: IBaseSelectProps) => {
  const { name, options, selectedValue, onChange, ...otherProps } = props;

  return (
    <select
      onChange={(event) => onChange(event.target.value)}
      name={name}
      {...otherProps}
      value={selectedValue}
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;
