import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const newValueSet = (currentValue, id, checked ) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({ currentValue, values, setOptionValue }) => {
  return(
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input
            type='checkbox'
            value={value.id}
            checked={currentValue.includes(value.id)}
            onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
          />
          {value.name}
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionCheckboxes;
