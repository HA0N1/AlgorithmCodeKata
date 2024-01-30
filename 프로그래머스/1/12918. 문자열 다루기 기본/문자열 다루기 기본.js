// 문자열의 길이 4or6
// 숫자로만 존재 시 t 아닐시 f (if return false)
// 지수 일 땐 어떻게 할 것인가.
function solution(s) {
    let str = /\D/;
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if (str.test(s[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}