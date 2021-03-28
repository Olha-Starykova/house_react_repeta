import React from 'react';

//его стейт в арр

const Filter = ({ value, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;