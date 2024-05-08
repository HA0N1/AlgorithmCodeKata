function solution(array) {
    // array는 홀수
    // 정렬 후 가운데 값 구하기
    let sort = array.sort((a, b) => a - b)
    let index = Math.floor(sort.length/2)
    let answer = sort[index]
    return answer;
}