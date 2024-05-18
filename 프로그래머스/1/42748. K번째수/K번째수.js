// 이중 배열 [i][j]
// 0번쨰부터 1번째까지 자른 후 정렬 후 2번째 출력
function solution(array, commands) {
    let empty
    let k
    let arr = []
for(i=0; i<commands.length; i++){
   empty = array.slice(commands[i][0]-1,commands[i][1]).sort((a, b) => a - b)
    k = commands[i][2]-1
    arr.push(empty[k])
}
    return arr;
}