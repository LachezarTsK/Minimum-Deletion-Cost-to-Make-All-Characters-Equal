
import kotlin.math.max

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun minCost(input: String, cost: IntArray): Long {
        val costPerLetter = createCostPerLetter(input, cost)
        /*
         Alternatively:
         return cost.sumOf() { n -> n.toLong() } - costPerLetter.max()
        */
        return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter)
    }

    private fun createCostPerLetter(input: String, cost: IntArray): LongArray {
        val costPerLetter = LongArray(ALPHABET_SIZE)
        for (i in input.indices) {
            costPerLetter[input[i] - 'a'] += cost[i]
        }
        return costPerLetter
    }

    private fun findTotalCost(cost: IntArray): Long {
        var totalCost: Long = 0
        for (current in cost) {
            totalCost += current
        }
        return totalCost
    }

    private fun findMaxCostPerLetter(costPerLetter: LongArray): Long {
        var maxCost: Long = 0
        for (current in costPerLetter) {
            maxCost = max(maxCost, current)
        }
        return maxCost
    }
}
