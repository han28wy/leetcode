var maxSubArray = function(nums) {
    let sum = nums[0]
    let result = nums[0]
    for(let i=1;i<nums.length;i++){
        sum = Math.max(sum+nums[i], nums[i])
        result = Math.max(result, sum)
    }
    
    return result
};
nums = [1]
const res = maxSubArray(nums)
console.log(res)