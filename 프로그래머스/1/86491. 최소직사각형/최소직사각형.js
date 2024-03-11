/**
*   각 인덱스 요소마다 큰 수와 작은 수 구하기
*/
function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for(let i = 0; i < sizes.length; i++) {
        let [width, height] = sizes[i];
        if(width < height) {
            [width, height] = [height, width];
        }
        if(width > maxWidth) {
            maxWidth = width;
        }
        if(height > maxHeight) {
            maxHeight = height;
        }
    }
    return maxWidth * maxHeight;
}
