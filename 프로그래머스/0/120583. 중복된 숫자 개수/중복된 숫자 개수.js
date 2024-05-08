function solution(array, n) {
    // array 안에 n이 몇개인지
    let answer = 0;
    for (let a of array){
        if (a === n) answer += 1
    }
    return answer;
}