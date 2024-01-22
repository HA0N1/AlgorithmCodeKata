function solution(n) {
  var answer = [];
  for (i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer[i] = "수";
    } else {
      answer[i] = "박";
    }
  }
  return answer.join("");
}