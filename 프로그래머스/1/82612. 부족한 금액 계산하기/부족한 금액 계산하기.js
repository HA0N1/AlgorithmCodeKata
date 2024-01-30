// count번 째마다 가격이 count배.
// 가지고 있는 금액이 얼마나 모자른지 리턴
// money -= price * count
// 안 모자르면 0리턴
function solution(price, money, count) {
    var answer = 0;
    for (i=1; i<=count; i++){
        money -= price * i
    }  
    if ( money < 0){
    return money * -1
    }
    return answer
}