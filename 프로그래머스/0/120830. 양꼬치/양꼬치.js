function solution(n, k) {
    let meat = n * 12000
    let drink = k * 2000
    let service = (n / 10)
    let a = Math.floor(service)
    return meat + drink - a * 2000
}