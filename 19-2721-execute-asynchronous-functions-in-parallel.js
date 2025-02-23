const promiseAll = (functions) => {
  return new Promise(async (resolve, reject) => {
    const lengthFunc = functions.length;
    const answer = new Array(lengthFunc);
    let counter = 0;

    functions.forEach(async (func, index) => {
      try {
        const value = await func();

        answer[index] = value;

        counter++;

        if (lengthFunc === counter) {
          resolve(answer);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};
