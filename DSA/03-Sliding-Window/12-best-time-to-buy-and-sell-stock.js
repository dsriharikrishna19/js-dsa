// DSA #3: Best Time to Buy and Sell Stock
// Pattern: Greedy / One Pass
// Question:
// Given an array of prices where prices[i] is the price
// of a stock on day i, find the maximum profit you can
// achieve by buying on one day and selling on a later day.
//
// You may complete at most one transaction.
//
// Example:
// prices = [7, 1, 5, 3, 6, 4]
// Output: 5
//
// Explanation:
// Buy on day 2 at price 1
// Sell on day 5 at price 6
// Profit = 6 - 1 = 5


// 1. Brute Force Approach
// Pattern: Nested Loops
// Time: O(n²)
// Space: O(1)

const maxProfitBruteForceApproach = (prices) => {

    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        for (let j = i + 1; j < prices.length; j++) {

            // Calculate profit
            const profit = prices[j] - prices[i];

            // Update maximum profit
            maxProfit = Math.max(maxProfit,profit);
        }
    }

    return maxProfit;
};

// 2. Better Approach
// Pattern: Greedy / Track Minimum
// Time: O(n)
// Space: O(1)

    const maxProfitBetterApproach = (prices) => {

        let minPrice = Infinity;
        let maxProfit = 0;

        for (const price of prices) {

            if(price < minPrice){
                minPrice = price
            } else {
                maxProfit = Math.max(maxProfit,price-minPrice);
            }

        }

        return maxProfit;
    };


// 3. Optimal Approach
// Pattern: Greedy / One Pass
// Time: O(n)
// Space: O(1)

const maxProfitOptimalApproach = (prices) => {

    // Your code here

};


// Test Cases

console.log(
    maxProfitBruteForceApproach([7, 1, 5, 3, 6, 4])
);
// Expected: 5


console.log(
    maxProfitBetterApproach([7, 1, 5, 3, 6, 4])
);
// Expected: 5


console.log(
    maxProfitOptimalApproach([7, 1, 5, 3, 6, 4])
);
// Expected: 5


// Additional Test Cases

console.log(
    maxProfitOptimalApproach([7, 6, 4, 3, 1])
);
// Expected: 0

console.log(
    maxProfitOptimalApproach([1, 2, 3, 4, 5])
);
// Expected: 4

console.log(
    maxProfitOptimalApproach([2, 4, 1])
);
// Expected: 2

console.log(
    maxProfitOptimalApproach([2, 1, 2, 1, 0, 1, 2])
);
// Expected: 2