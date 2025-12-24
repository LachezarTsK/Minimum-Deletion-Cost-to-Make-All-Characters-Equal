
/**
 * @param {string} input
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (input, cost) {
    const costPerLetter = createCostPerLetter(input, cost);
    /*
     Alternatively:
     return cost.reduce((x, y) => x + y) - Math.max(...costPerLetter);
     */
    return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter);
};

class Util {
    static  ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
}

/**
 * @param {string} input
 * @param {number[]} cost
 * @return {number[]}
 */
function createCostPerLetter(input, cost) {
    const costPerLetter = new Array(Util.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        costPerLetter[input.codePointAt(i) - Util.ASCII_SMALL_CASE_A] += cost[i];
    }
    return costPerLetter;
}

/**
 * @param {number[]} cost
 * @return {number}
 */
function findTotalCost(cost) {
    let totalCost = 0;
    for (let current of cost) {
        totalCost += current;
    }
    return totalCost;
}

/**
 * @param {number[]} costPerLetter
 * @return {number}
 */
function findMaxCostPerLetter(costPerLetter) {
    let maxCost = 0;
    for (let current of costPerLetter) {
        maxCost = Math.max(maxCost, current);
    }
    return maxCost;
}
