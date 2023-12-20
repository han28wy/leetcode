var moveZeroes = function(nums) {
    let len = nums.length
    for(let i=0; i<len;i++){
        if(nums[i] === 0){
            nums.splice(i,1)
            nums.push(0)
            len--
            i--
        }
    }
    console.log(nums)
    return nums

};

nums = [0,0,1]
moveZeroes(nums)