// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let exchange = {"H": 0, "Q": 0, "D": 0, "N": 0, "P": 0};

    exchange["H"] = Math.trunc(currency / 50);
    currency %= 50;
    exchange["Q"] = Math.trunc(currency / 25);
    currency %= 25;
    exchange["D"] = Math.trunc(currency / 10);
    currency %= 10;
    exchange["N"] = Math.trunc(currency / 5);
    exchange["P"] = currency %= 5;
    
    for (key in exchange) {
        if (exchange[key] == 0) delete exchange[key];
    }

    return exchange;
}
