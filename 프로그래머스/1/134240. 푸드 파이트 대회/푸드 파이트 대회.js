function solution(food) {
    // 배열의 가운데는 0
    // 왼쪽부터 2로 나눈 뒤 2보다 작다면 다음 인덱스
    // 크다면 계속 몫만큼 인덱스 번호 넣기
    // 역순으로 뒤집어서 붙이기
    var answer = '';
    for(let i = 1; i<food.length; i++){
    let temp = food[i]/2
    answer += String(i).repeat(temp)
        }
    let revers = answer.re
    return answer + '0' + [...answer].reverse().join('');
}