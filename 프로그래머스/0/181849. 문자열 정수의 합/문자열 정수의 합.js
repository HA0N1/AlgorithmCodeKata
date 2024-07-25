function solution(num_str) {
    let answer = num_str.split('').map(Number).reduce((accumulator, currentValue) => accumulator + currentValue,0)
    return answer;
}