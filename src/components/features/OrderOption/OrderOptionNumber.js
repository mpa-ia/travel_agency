import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => {
  return(
    <div className={styles.number}>
      <input
        className={styles.input}
        type='number'
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => setOptionValue(event.currentTarget.value)}
      />
      ({price})
    </div>
  );
};

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default OrderOptionNumber;
