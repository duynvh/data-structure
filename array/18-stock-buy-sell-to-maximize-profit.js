// Input: [8, 6, 5, 4, 3, 2, 1]
// Output: [6, 5]
function stockPrice(arr) {
    if (arr === null || arr.length < 2) {
        return [];
    }
    var currentBuy = arr[0];
    var globalSell = arr[1];
    var globalProfit = globalSell - currentBuy;
    var currentProfit = Number.NEGATIVE_INFINITY;
    for (var i = 1; i < arr.length; i++) {
        currentProfit = arr[i] - currentBuy;
        if (currentProfit > globalProfit) {
            globalProfit = currentProfit;
            globalSell = arr[i];
        }
        if (currentBuy > arr[i]) {
            currentBuy = arr[i];
        }
    }
    return [globalSell - globalProfit, globalSell];
}
console.log(stockPrice([12, 30, 40, 90, 110]));
