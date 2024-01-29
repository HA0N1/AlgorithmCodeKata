function solution(s) {
    var answer = '';
    let temp = '';
    let a = s.split("")
    for(i=0; i<s.length; i++){
        for(j=0; j<s.length-1; j++){
        if(a[j] < a[j+1]){
            temp = a[j]
            a[j]= a[j+1]
            a[j+1] = temp
        }
        }
    }
    return a.join("")
}