var rotate2 = function(nums, k) {
    len = nums.length;
    const str = nums.splice(len-k, k)
    console.log(str, '    ',nums)
    const res = str.concat(nums)
    return res
};

var rotate = function(nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; ++i) {
        newArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = newArr[i];
    }
};

const nums = [1,2,3,4,5,6,7]
const k = 3
const re = rotate(nums, k)
console.log(re)