function solution(n) {
  let answer = Math.sqrt(n);
  if (answer % 1 === 0) {
    return (Math.sqrt(n) + 1) ** 2;
  } else {
    return -1;
  }
}