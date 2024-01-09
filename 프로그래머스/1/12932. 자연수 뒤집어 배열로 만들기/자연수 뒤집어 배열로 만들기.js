function solution(n) {
    var answer = n.toString(10).split("").map((n)=>{return Number(n)}).reverse();
    return answer;
}