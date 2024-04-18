function solution(my_string) {
   let str = my_string.split('')
   let answer= str.filter((s)=> !['a','e','i','o','u'].includes(s)).join('')

    return answer;
}