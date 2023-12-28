var productExceptSelf = function(nums) {
    let len = nums.length
    let ans = new Array()
    ans[0] = 1
    let temp = 1
    for(let i = 1; i < len; i++){
        ans[i] = ans[i-1] * nums[i-1]
    }

    for(let i=len-2; i>=0; i--){
        temp = temp*nums[i+1]
        ans[i] = ans[i] * temp
    }
    return ans
};
nums = [1,2,3,4]
const res = productExceptSelf(nums)
console.log(res)