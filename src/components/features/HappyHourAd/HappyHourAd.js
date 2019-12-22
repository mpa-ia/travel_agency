import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <h3 className={'title'}>{title}</h3>
        <p className={'promoDescription'}>{description}</p>
      </div>
    );
  }


}
export default HappyHourAd;
