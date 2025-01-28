const reduce = (nums, fn, init) => {
	// At first the result variable is the initial value (init).
	let result = init;
	
	// Then loop through each number in the input array (nums).
	nums.forEach((n) => {
		// Inside fn(), the first value must be the initial value (init), but fn() should not be called with the initial value (init) each time, it should be called with the previous value. 
		// Therefore, the initial value (init) is initially stored in the result variable.
		result = fn(result, n)
	});
	
	return result;
} 