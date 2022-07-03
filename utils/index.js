export const groupByPolyfill = () => {
  if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function (callback) {
      return this.reduce(function (acc, item) {
        const key = callback(item);
        acc[key] = (acc[key] || []).concat([item]);
        return acc;
      }, {});
    };
  }
}