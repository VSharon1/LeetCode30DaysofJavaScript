// The function is supposed to return an object.
const createCounter = (init) => {
  let initCopy = init;
  return {
    // The value is incremented before being returned.
    increment: () => ++initCopy,

    // The value is decremented before being returned.
    decrement: () => --initCopy,

    reset: () => (initCopy = init),
  };
};
