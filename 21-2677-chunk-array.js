/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  const result = [];
  let subArray = [];

  for (let index = 0; index < arr.length; index++) {
    subArray.push(arr[index]);

    if (subArray.length === size) {
      result.push(subArray);
      subArray = [];
    }
  }

  if (subArray.length) {
    result.push(subArray);
  }

  return result;
};
