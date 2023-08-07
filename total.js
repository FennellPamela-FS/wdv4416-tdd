const total = (array) => {
    let total = 0;
    for (let price in array) {
        total += array[price];
    };
    return total;

};

module.exports = total;