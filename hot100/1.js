var twoSum = function(nums, target) {
    // const map = new Map(nums.map((value, index) => [value, index]));
    // for (let [key, value] of map) {
    //    let newValue = target - key
    //    if(map.get(newValue)){
    //     result = [value, map.get(newValue)]
    //     break;
    //    }
    //   };
    //   return result
    const map = new Map()
    for(let i = 0, len = nums.length;i < len;i++) {
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};
const nums = [3,3]
const target = 6
const res = twoSum(nums, target)
console.log(res)
