function solution(phone_number) {
  let answer = "";
  let a = "";
  answer = phone_number.length - 4;
  a = phone_number.slice(-4);

  return "*".repeat(answer).concat(a);
}