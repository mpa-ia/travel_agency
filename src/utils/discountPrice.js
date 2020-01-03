import {parseOptionPrice} from './parseOptionPrice';

export const discountPrice = (regularPrice, discount) => {
  let price = parseOptionPrice(regularPrice).value;
  if (price == null
    ||
    (isNaN(price) || isNaN(discount))
    ||
    (price <= 0 || discount < 0)
  ) {
    return null;
  } else {
    return `$${(price - (price * (discount/100))).toFixed(2)}`;
  }
};
