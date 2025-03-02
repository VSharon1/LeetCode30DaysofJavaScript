/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  if (typeof obj === "object") {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (obj.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
