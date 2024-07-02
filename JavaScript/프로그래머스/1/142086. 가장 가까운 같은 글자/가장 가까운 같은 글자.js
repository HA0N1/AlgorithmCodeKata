function solution(s) {
    /**
    앞 인덱스의 문자들과 비교한 뒤
    같다면 가장 가까운 인데스와의 거리 추가, 같지 않다면 -1 추가
    - 현재 위치를 기억할 변수 필요
    - 반복문으로 앞 변수들 돌기
    */
    const charIndex = new Map() // 각 문자열의 인덱스를 저장하기 위함.
    const answer = [];
    
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (charIndex.has(char)){
            answer.push(i - charIndex.get(char))
        }else{
            answer.push(-1)
        }
charIndex.set(char,i)
        
    }
    
    
    
    return answer
}
