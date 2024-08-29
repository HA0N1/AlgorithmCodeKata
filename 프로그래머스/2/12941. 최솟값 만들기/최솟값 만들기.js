// A의 제일 작은 수 x B의 제일 큰 수 = 최솟값
function solution(A,B){
    A.sort((a,b)=>a-b)
    // B는 역순으로
    B.sort((a,b)=>b-a)
    // 누계 + 현재 * B의 인덱스 요소
    return A.reduce((acc,curr,idx)=> acc + curr * B[idx],0);
}