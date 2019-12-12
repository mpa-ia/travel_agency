import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue }) => (
  <div className={styles.icons}>
    {required ? '' : (
      <div>
        onClick={emptyString => setOptionValue(emptyString)}
        <Icon name={'times-circle'}/>
        none
      </div>
    )}

    {values.map(value => (
      <div
        className={styles.icon + (currentValue == value.id ? ' ' + styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
