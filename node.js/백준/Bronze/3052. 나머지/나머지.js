const fs = require("fs");
const nums = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const s = new Set();
for (const n of nums) {
  s.add(n % 42);
}

console.log(s.size);