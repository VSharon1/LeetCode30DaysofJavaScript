/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  const arrTransformed = [];

  arr.forEach((element, index) => {
    arrTransformed[index] = fn(element, index);
  });

  return arrTransformed;
};
