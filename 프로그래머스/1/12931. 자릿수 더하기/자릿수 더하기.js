function solution(n) {
  let answer = 0;
  let numStr = n.toString();
    for (i=0; i < numStr.length; i++){
        answer += parseInt(numStr[i])
        }
  return answer;
}