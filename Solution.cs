
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public long MinCost(string input, int[] cost)
    {
        long[] costPerLetter = CreateCostPerLetter(input, cost);
        /*
         Alternatively:
         return cost.Sum(x=>(long)x) - costPerLetter.Max();
        */
        return FindTotalCost(cost) - FindMaxCostPerLetter(costPerLetter);
    }

    private long[] CreateCostPerLetter(string input, int[] cost)
    {
        long[] costPerLetter = new long[ALPHABET_SIZE];
        for (int i = 0; i < input.Length; ++i)
        {
            costPerLetter[input[i] - 'a'] += cost[i];
        }
        return costPerLetter;
    }

    private long FindTotalCost(int[] cost)
    {
        long totalCost = 0;
        foreach (int current in cost)
        {
            totalCost += current;
        }
        return totalCost;
    }

    private long FindMaxCostPerLetter(long[] costPerLetter)
    {
        long maxCost = 0;
        foreach (long current in costPerLetter)
        {
            maxCost = Math.Max(maxCost, current);
        }
        return maxCost;
    }
}
