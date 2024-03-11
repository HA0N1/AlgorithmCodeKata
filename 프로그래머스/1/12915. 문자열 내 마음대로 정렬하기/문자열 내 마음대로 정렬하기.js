function solution(strings, n) {
  for (i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();

  for (j = 0; j < strings.length; j++) {
    strings[j] = strings[j].substring(1);
  }

  return strings;
}