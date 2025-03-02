/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  let result = init;

  nums.forEach((n) => {
    result = fn(result, n);
  });

  return result;
};
