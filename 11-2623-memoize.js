const memoize = (fn) => {
	// Object, because it will not store the result of only one function call.
	const cache = {};
	
	// The spread operator allows any number of parameters to be passed in.
	return (...args) => {
		// args is an array, which is an object that generally cannot be a key, it must be a string.
		// JSON.stringify takes args and makes it a string. 
		const key = JSON.stringify(args);
		
		// The fn should only be called if it has not been called before, so check the key in cache.
		if (key in cache) {
			return cache[key];
		}
		
		cache[key] = fn(...args);
		
		return cache[key];
	};
};