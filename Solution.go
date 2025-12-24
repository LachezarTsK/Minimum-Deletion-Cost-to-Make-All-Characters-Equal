
package main

const ALPHABET_SIZE = 26

func minCost(input string, cost []int) int64 {
    var costPerLetter []int64 = createCostPerLetter(input, cost)
    /*
     Alternatively:
     return findTotalCost(cost) - slices.Max(costPerLetter)
    */
    return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter)
}

func createCostPerLetter(input string, cost []int) []int64 {
    costPerLetter := make([]int64, ALPHABET_SIZE)
    for i := range input {
        costPerLetter[input[i] - 'a'] += int64(cost[i])
    }
    return costPerLetter
}

func findTotalCost(cost []int) int64 {
    var totalCost int64 = 0
    for _, current := range cost {
        totalCost += int64(current)
    }
    return totalCost
}

func findMaxCostPerLetter(costPerLetter []int64) int64 {
    var maxCost int64 = 0
    for _, current := range costPerLetter {
        maxCost = max(maxCost, current)
    }
    return maxCost
}
