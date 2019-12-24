export const discountPrice = (regularPrice, discount) => {
  if (regularPrice == null
    ||
    (isNaN(regularPrice) || isNaN(discount))
    ||
    (regularPrice < 0 || discount < 0)
  ) {
    return null;
  }
};
