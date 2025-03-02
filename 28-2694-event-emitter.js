class EventEmitter {
  eventObj = {};
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.eventObj.hasOwnProperty(eventName)) {
      this.eventObj[eventName] = new Set();
    }

    this.eventObj[eventName].add(callback);

    return {
      unsubscribe: () => {
        this.eventObj[eventName].delete(callback);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const result = [];

    (this.eventObj[eventName] ?? []).forEach((callback) => {
      result.push(callback(...args));
    });

    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
