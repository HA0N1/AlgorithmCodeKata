const [H, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let hour = H;
let minute = M;

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour -= 1;
}

if (hour < 0) {
    hour = 23;
}

console.log(hour + ' ' + minute);