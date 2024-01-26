// 주어진 두 숫자 사이의 숫자 구하기
// 숫자들의 약수의 갯수 구하기
// 제곱근이 정수 O : 약수의 개수는 홀수
// 제곱근이 정수 X : 약수의 개수는 짝수
// 약수의 갯수가 짝수면 + 홀수면 -
// 총 값 리턴
function solution(left, right) {
    var answer = 0;
    let btweenNum=[];
    for(i=left; i<=right; i++){
        btweenNum.push(i)
    }
    return btweenNum.map((num)=> Number.isInteger(Math.sqrt(num))? answer-=num:answer+=num).pop()
}