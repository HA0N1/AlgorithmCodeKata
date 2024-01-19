function solution(arr) {
  // var answer = [];
  let min = Math.min(...arr);
  let minNumIdx = arr.filter((arr) => arr !== min);
  if (arr.length > 1) {
    return minNumIdx;
  } else {
    return [-1];
  }
}