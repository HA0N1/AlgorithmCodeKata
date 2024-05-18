// 각 다른 인덱스 2개를 더해서 나올 수 있는 값 싹 다 뽑기
// 오름차순 정렬
function solution(numbers) {
    var answer = [];
    
    for(i=0; i<numbers.length; i++){
        // 시작할 때 마다 1번째가 되므로 같은 수를 더하게 됨 ex) 0+0, 7+7
         for(j=i+1; j<numbers.length; j++){
             answer.push(numbers[i]+numbers[j])
         }
    }
    let uniqueArr=[...new Set(answer)].sort((a,b)=>a-b)

    return uniqueArr
}