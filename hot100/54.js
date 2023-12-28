// 从外层开始遍历 直到最内
var spiralOrder = function(matrix) {
    let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1;
    const result = []

    while(l <= r && t <= b){
        for(let i=l; i<=r; i++){
            result.pish(matrix[i][top])
        }
        for(let j = t;j<b;j++){
            result.push(matrix[r][j])
        }
        for(let x = r-1;x>=l;x--){
            result.push(matrix[x][b])
        }
        for(let y=b-1;y>=t;y--){
            result.push(matrix[l][y])
        }
        l+=1
        r-=1
        t+=1
        b-=1
    }
};