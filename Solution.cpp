
#include <span>
#include <array>
#include <string>
#include <string_view>
#include <algorithm>

using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    long long minCost(const string& input, vector<int>& cost) const {
        array<long long, ALPHABET_SIZE> costPerLetter = createCostPerLetter(input, cost);
        /*
         Alternatively:
         return accumulate(cost.begin(), cost.end(), 0LL) - *ranges::max_element(costPerLetter);
         */		
        return findTotalCost(cost) - findMaxCostPerLetter(costPerLetter);
    }

private:
    array<long long, ALPHABET_SIZE> createCostPerLetter(string_view input, span<const int> cost) const {
        array<long long, ALPHABET_SIZE>costPerLetter{};
        for (int i = 0; i < input.length(); ++i) {
            costPerLetter[input[i] - 'a'] += cost[i];
        }
        return costPerLetter;
    }

    long long findTotalCost(span<const int> cost) const {
        long long totalCost = 0;
        for (const auto& current : cost) {
            totalCost += current;
        }
        return totalCost;
    }

    long long findMaxCostPerLetter(span<const long long> costPerLetter) const {
        long long maxCost = 0;
        for (const auto& current : costPerLetter) {
            maxCost = max(maxCost, current);
        }
        return maxCost;
    }
};
