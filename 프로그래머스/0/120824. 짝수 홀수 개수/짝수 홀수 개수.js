function solution(num_list) {
    // [짝수 개수, 홀수 개수]
    // 개수부터 구하기
    let evenCnt = 0
    let oddCnt = 0
    let answer=[]
    for (i=0; i<num_list.length; i++){
    num_list[i] % 2 === 0 ? evenCnt+=1 : oddCnt+=1
}
    answer.push(evenCnt, oddCnt)
    return answer
}