function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((arr) => arr % divisor === 0).sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (answer / divisor === 0) {
      return (answer = [-1]);
    }
  }
  return answer;
}