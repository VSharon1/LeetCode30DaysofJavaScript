// createCounter is a function, but returns another function.
const createCounter = (n) => {
    // returns and another function that returns n and then increments it.
    return () => n++
};

// counter is a function, not a value.
// const counter = createCounter(10);