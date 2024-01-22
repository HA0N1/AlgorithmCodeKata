function solution(s) {
    var answer = '';
    let sLen = s.length/2
    if(s.length % 2 === 0){
       return s.slice(sLen-1, sLen+1)
    }else{
        answer= Math.floor(sLen)
    }
    return s.slice(sLen, sLen+1)
}