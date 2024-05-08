function solution(n) {
    // n 만큼의 숫자 중 홀수만 넣기
    
    let answer = [];
    for (i=0; i<=n; i++){
        if(i%2 === 1){
            answer.push(i)
        }
    }
    return answer;
}