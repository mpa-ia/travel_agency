export const discountPrice = (regularPrice, discount) => {
  if (regularPrice == null
    ||
    (isNaN(regularPrice) || isNaN(discount))
  ) {
    return null;
  }
};
