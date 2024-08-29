function solution(d, budget) {
    var answer = 0;
    let sortD = d.sort((a,b)=>a-b)
    for (let amount of sortD){
        (budget -= amount) >= 0 ? answer++ : answer
        if (budget < amount) break;
    }
    return answer;
}