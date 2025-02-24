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
