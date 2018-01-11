const fs = require("fs");

//const input = fs.readFileSync("input.txt", "utf8").trim();

const input = "1111";
const summer = (tot, n, i, arr) => n === (arr[i+1] || arr[0]) ? tot + n : tot;
const res = input.split("").map(parseInt).reduce(summer);

console.log(res);
