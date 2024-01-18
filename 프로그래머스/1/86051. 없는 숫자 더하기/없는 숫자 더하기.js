function solution(numbers) {
    var answer = 0;
    let temp =45
    for(i=0; i<numbers.length; i++){
       temp = temp - numbers[i]
    }
    return temp;
}