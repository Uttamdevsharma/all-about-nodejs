const add = (a,b) => {
    return a+b;
}

const multiply = (a,b) => a*b;

function formatSmartNumber(num) {
    if (num === null || num === undefined || isNaN(num)) return "N/A";
    
    const abs = Math.abs(num);
    const sign = num < 0 ? "-" : "";

    if (abs < 1000) return sign + abs.toString();
    if (abs < 1_000_000) return sign + (abs / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    if (abs < 1_000_000_000) return sign + (abs / 1_000_000).toFixed(2).replace(/\.0+$/, "") + "M";
    if (abs < 1_000_000_000_000) return sign + (abs / 1_000_000_000).toFixed(2).replace(/\.0+$/, "") + "B";
    return sign + (abs / 1_000_000_000_000).toFixed(2).replace(/\.0+$/, "") + "T";
}


module.exports = {
    add,
    multiply,
    formatSmartNumber
}