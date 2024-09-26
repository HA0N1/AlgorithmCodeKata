class Solution {
    public int[] solution(int n, int k) {
        int cout = n/k;
        int[] answer = new int[cout];
        for (int i = 1; i <= cout; i++){
            answer[i-1] = k * i;
        }
        return answer;
    }
}