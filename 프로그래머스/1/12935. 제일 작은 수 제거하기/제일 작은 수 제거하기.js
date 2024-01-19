function solution(arr) {
  let min = Math.min(...arr);
  let filterArr = arr.filter((arr) => arr !== min);
  if (arr.length > 1) {
    return filterArr;
  } else {
    return [-1];
  }
}