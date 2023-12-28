var setZeroes2 = function(matrix) {
    let row = new Array(matrix.length).fill(false)
    let col = new Array(matrix[0].length).fill(false)

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                row[i] = true
                col[j] = true
            }
        }
    }
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(row[i] || col[j]){
                matrix[i][j] = 0
            }
        }
    }
    if(rowZero){
        for (let i = 0; i < matrix.len; i++) {
            matrix[i][0] = 0;
        }
    }

    if(colZero){

    }
    return matrix
};

// 解法2 使用matrix的第一行第一列 代替解法1的row和col
var setZeroes = function(matrix) {
    let rowZero = false
    let colZero = false

    // 先遍历第一行第一列原始数据，看是否需要置零
    for(let i = 0; i < matrix.length; i++){
      if(matrix[i][0] === 0){
        rowZero = true
        break
      }
    }
    for(let j=0; j<matrix[0].length; j++){
        if(matrix[0][j] === 0){
            colZero = true
            break
        }
    }
    // 收集矩阵中0

    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = matrix[0][j] = 0
            }
        }
    }

    // 重置
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(rowZero){
        for(let i=0;i<matrix.length; i++){
            matrix[i][0] = 0
        }

    }
    if(colZero){
        for(let j=0;j<matrix[0].length; j++){
            matrix[0][j] = 0
        }
    }
    return matrix
};


matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
const res = setZeroes(matrix)
console.log(res)