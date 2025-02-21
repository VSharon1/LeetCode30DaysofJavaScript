const compactObject = (obj) => {
    if (Array.isArray(obj)) {
        let result = [];

        for (let element of obj) {
            if (element) {
                if (typeof element == 'object' || Array.isArray(element)) {
                    result.push(compactObject(element));
                } else {
                    result.push(element);
                }
            }
        }

        return result;
    } else {
        let result = {};

        for (let key in obj) {
            if (obj[key]) {
                if (typeof obj[key] == 'object' || Array.isArray(obj[key])) {
                    result[key] = compactObject(obj[key]);
                } else {
                    result[key] = obj[key];
                }
            }
        }

        return result;
    }
};