
function solution(s) {
    let num = {
        'zero': 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    while(isNaN(s))
    for (let key in num){
        if(s.indexOf(key)>-1){
            s= s.replace(key, num[key])
        }
    }
    return Number(s);
}