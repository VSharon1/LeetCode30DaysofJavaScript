const compose = (functions) => {
	// fn the helper function takes two parameters.
	// First parameter is the accumulated value (starts as the input x).
	// Second parameter is the current function being applied.
	// As f is a function and not a value, it can be called with the accumulated value.
	const fn = (acc, f) => f(acc);
	
	// Return a single function that represents the composition of all the functions in the functions array.
	return (x) => {
		// reduce() method can be used to specify how to reduce/aggregate the list of functions.
		// rduceRight() method can be used to do it in reverse order.
		// First parameter is a function (fn) defined above.
		// Second parameter x is the start value.
		return functions.reduceRight(fn, x)
	}
};