const cancellable = (fn, args, t) => {
  fn(...args);

  const intervalTimer = setInterval(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearInterval(intervalTimer);
  };

  return cancelFn;
};
