
function minCost(input: string, cost: number[]): number {
    const costPerLetter = createCostPerLetter(input, cost);
    /*
     Alternatively:
     return cost.reduce((x, y) => x + y) - Math.max(...costPerLetter);
    */
    return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter);
};

class Util {
    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
}

function createCostPerLetter(input: string, cost: number[]): number[] {
    const costPerLetter = new Array(Util.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        costPerLetter[input.codePointAt(i) - Util.ASCII_SMALL_CASE_A] += cost[i];
    }
    return costPerLetter;
}

function findTotalCost(cost: number[]): number {
    let totalCost = 0;
    for (let current of cost) {
        totalCost += current;
    }
    return totalCost;
}

function findMaxCostPerLetter(costPerLetter: number[]): number {
    let maxCost = 0;
    for (let current of costPerLetter) {
        maxCost = Math.max(maxCost, current);
    }
    return maxCost;
}
