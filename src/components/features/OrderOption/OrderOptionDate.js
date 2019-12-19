import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import dateToString from '../../../utils/dateToString';
import styles from './OrderOption.scss';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue }) => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker className={styles.input}
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setOptionValue(dateToString(date));
      }}
      minDate={new Date()}
    />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
