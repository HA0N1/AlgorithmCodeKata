function solution(x) {
  var answer = 0;
  let xStr = x.toString().split("");
  for (i = 0; i < xStr.length; i++) {
    answer += parseInt(xStr[i]);
  }
  if (x % answer === 0) {
    return true;
  } else {
    return false;
  }
}