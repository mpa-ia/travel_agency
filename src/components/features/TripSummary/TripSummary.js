import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TripSummary.scss';
import {Col} from 'react-flexbox-grid';

import { discountPrice } from '../../../utils/discountPrice';
import { formatPrice } from '../../../utils/formatPrice';


const TripSummary = ({id, image, name, cost, days, tags}) => {
  const timeUTC = new Date(new Date().toUTCString().substr(0, 25));
  return (
    <Col xs={12} sm={6} lg={4} className={styles.column}>
      <Link to={`/trip/${id}`} className={styles.link}>
        <article className={styles.component}>
          <img src={image} alt={name} />
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.details}>
            <span>{days} days</span>
            <span>{timeUTC.getHours() == 12 ? (
              `<strong>HAPPY HOUR!</strong> Price from ${formatPrice(discountPrice(cost, 20))} <br><small>Standard price from ${cost}</small>`
            ) : (
              `Price from ${cost}`)}</span>
          </div>
          {tags == null ? null : (
            <div className={styles.tags}>
              {tags.map(tag => (
                <span className={styles.tag} key={tag.toString()}>{tag}</span>
              ))}
            </div>
          )}
        </article>
      </Link>
    </Col>
  );
};
TripSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  cost: PropTypes.string.isRequired,
  days: PropTypes.number,
  tags: PropTypes.array,
};

export default TripSummary;
