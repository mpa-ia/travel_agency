import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, placeholder, type, setOptionValue}) => (
  <div className={styles.text}>
    <input
      // className={}
      type={type}
      placeholder={placeholder}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OrderOptionText;
