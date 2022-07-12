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

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}