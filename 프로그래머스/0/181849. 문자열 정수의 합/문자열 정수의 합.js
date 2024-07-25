function solution(num_str) {
    return [...num_str].reduce((accumulator, currentValue) => accumulator + +currentValue,0)
}