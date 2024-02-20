// 짝수 번 째 대문자 홀수 번 째 소문자
function solution(s) {
    let answer = '';
    let words = s.split(' ');
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }//0 이나 1인 'try','hello' 뒤에 공백
        if (i < words.length -1) {
            answer += ' ';
        }
    }
    return answer;
}