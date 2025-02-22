const expect = (val) => {
    // function must return an object containing two functions.
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true;
            } else {
                throw new Error ('Not Equal');
            }
        },
        notToBe: (val2) => {
            if (val !== val2) {
                return true;
            } else {
                throw new Error ('Equal');
            }
        }
    }
};