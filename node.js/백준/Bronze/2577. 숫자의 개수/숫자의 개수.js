const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

const result = A * B * C;
const str = String(result);

for(let i = 0; i<= 9; i++){
    let cnt = 0
    for (let j = 0; j <= str.length; j++) {
        if(Number(str[j]) === i) {
            cnt += 1
            }
        }
     console.log(cnt)
    }
