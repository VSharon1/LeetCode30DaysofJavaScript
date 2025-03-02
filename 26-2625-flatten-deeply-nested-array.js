/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = (arr, n) => {
  const result = [];

  const helper = (arr, depth) => {
    for (const value of arr) {
      if (typeof value === "object" && depth < n) {
        helper(value, depth + 1);
      } else {
        result.push(value);
      }
    }
    return result;
  };
  return helper(arr, 0);
};
