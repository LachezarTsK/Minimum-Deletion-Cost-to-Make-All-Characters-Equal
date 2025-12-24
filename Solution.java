
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public long minCost(String input, int[] cost) {
        long[] costPerLetter = createCostPerLetter(input, cost);
        /*
         Alternatively:
         return Arrays.stream(costPerLetter).sum() - Arrays.stream(costPerLetter).max().getAsLong();
         */
        return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter);
    }

    private long[] createCostPerLetter(String input, int[] cost) {
        long[] costPerLetter = new long[ALPHABET_SIZE];
        for (int i = 0; i < input.length(); ++i) {
            costPerLetter[input.charAt(i) - 'a'] += cost[i];
        }
        return costPerLetter;
    }

    private long findTotalCost(int[] cost) {
        long totalCost = 0;
        for (int current : cost) {
            totalCost += current;
        }
        return totalCost;
    }

    private long findMaxCostPerLetter(long[] costPerLetter) {
        long maxCost = 0;
        for (long current : costPerLetter) {
            maxCost = Math.max(maxCost, current);
        }
        return maxCost;
    }
}
