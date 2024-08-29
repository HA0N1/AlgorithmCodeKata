// 공백 이후 문자 대문자로 그 외 소문자로
// toUpperCase, toLowerCase
function solution(s) {
    let words = s.toLowerCase().split(' ');
    console.log(words)
    let jadenCase = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        console.log('word===>', word)
        return word; // 빈 문자열 처리
    });
    return jadenCase.join(' ');
}

console.log("공백 test",solution("   people Unfollowed Me"))