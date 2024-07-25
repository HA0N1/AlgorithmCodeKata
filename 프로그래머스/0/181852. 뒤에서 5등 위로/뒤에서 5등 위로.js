// 오름차순 후 4번쨰 인덱스까지
function solution(num_list) {
    let sortList = num_list.sort((a,b)=>a-b)
    return sortList.slice(5);
}