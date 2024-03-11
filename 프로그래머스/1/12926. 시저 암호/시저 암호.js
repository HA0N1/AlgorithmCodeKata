// n만큼 뒤로 밀기

function solution(s, n) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = upper.toLowerCase()
    let answer = ''
// 공백은 공백 넣어주기
    for (let i=0; i<s.length; i++){
        let str = s[i]
        if(str === ' '){
            answer += ' '
            continue
        }
   // str 알파벳 소대문자 구분하기   
        // 소문자
       let arr = lower.includes(str) ? lower : upper
// 해당 위치는 어떻게?? index? 
       let idx = arr.indexOf(str)+n
// z일 경우 알파벳 길이 만큼 나눠서? 뺴서? 다시 처음으로
       if(idx >= arr.length){
           idx -= arr.length
       }
        answer += arr[idx]
    }
    return answer;
}