// 두 수의 [최대 공약수,최소공배수] 담기
// for문으로 공약수,공배수 구하기
// 공약수 = 두 수가 다 나누어 떨어지기
// 공배수 = 두 수의 곱을 최대공약수로 나누기
// if문으로 push하기
function solution(n, m) {
  var answer = [];
  let maxdivision = []
  let lstcmMltpl = [];
  for (i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      maxdivision = i;
    }
  }
    lstcmMltpl = n * m / maxdivision;
    answer.push(maxdivision)
    answer.push(lstcmMltpl)
  return answer
}
