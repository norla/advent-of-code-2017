const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const summer = (tot, n, i, arr) => n === (arr[i+1] || arr[0]) ? tot + n : tot;
const res = input.trim().split("").map(parseInt).reduce(summer);

console.log(res);
