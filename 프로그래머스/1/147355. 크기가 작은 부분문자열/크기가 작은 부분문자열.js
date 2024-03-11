//
function solution(t, p) {
    let count = 0
    let num = parseInt(p)
    let a
    for (let i =0; i<t.length-p.length+1; i++){
        a=t.substring(i, i+p.length)
        a = parseInt(a)
        if(a<=num){
            count++  
        }
    }
return count
}