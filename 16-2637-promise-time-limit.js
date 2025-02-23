const timeLimit = (fn, t) => {
  return async (...args) => {
    return new Promise(async (resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        reject("Time Limit Exceeded");
      }, t);

      try {
        const res = await fn(...args);
        clearTimeout(timeoutId);
        resolve(res);
      } catch (error) {
        clearTimeout(timeoutId);
        reject(error);
      }
    });
  };
};
