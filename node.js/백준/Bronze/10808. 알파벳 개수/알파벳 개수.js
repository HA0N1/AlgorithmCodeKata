const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').toString().trim();

function solution(input) {
    const counts = new Array(26).fill(0);

    for (const ch of input) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0); // 'a' -> 0, 'b' -> 1, ...
        counts[idx] += 1;
    }

    return counts.join(' ');
}
console.log(solution(input))