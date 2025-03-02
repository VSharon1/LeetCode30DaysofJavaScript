/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let initCopy = init;
  return {
    increment: () => {
      return (initCopy = initCopy + 1);
    },
    decrement: () => {
      return (initCopy = initCopy - 1);
    },
    reset: () => {
      return (initCopy = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
