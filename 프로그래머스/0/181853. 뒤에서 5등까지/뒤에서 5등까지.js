function solution(num_list) {
    let sortList = num_list.sort((a,b)=>a-b)
    return sortList.slice(0,5);
}