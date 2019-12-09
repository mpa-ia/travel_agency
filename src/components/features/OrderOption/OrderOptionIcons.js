import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue}) => (
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
        className={styles.icon /* + (values.includes(value) ? ' ' + styles.iconActive : '') */}
        key={value.id}
        onClick={(id) => (setOptionValue(id))}
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
};

export default OrderOptionIcons;
