const filter = (arr, fn) => {
  const result = [];

  // First Solution:
  for (const i in arr) {
    // Number(i), because otherwise it will be a string if you iterate through
    if (fn(arr[i], Number(i))) {
      result.push(arr[i]);
    }
  }

  // Second Solution:
  // arr.forEach((value, index) => {
  // 	if (fn(value, index)) {
  // 		result.push(value);
  //     }
  // });

  return result;
};
