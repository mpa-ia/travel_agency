import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../../features/OrderSummary/OrderSummary';
import OrderOption from '../../features/OrderOption/OrderOption';
import { Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

const OrderForm = props => {
  return (
    <Row>
      {pricing.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption {...option} />
        </Col>
      )
      )}
      <Col xs={12}>
        <OrderSummary cost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  );

};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
