var longestConsecutive = function(nums) {
    // 从小到大排序
    nums.sort((a,b)=>a-b)
    let map = new Map()
    for(num of nums){
        // 找到比自己小一个的
        if(map.has(num-1)){
            map.set(num, map.get(num-1) + 1)
        }else{
            map.set(num, 1)
        }
    }
let ans = 0;
    // 取最大值
    for (const [index, value] of map) {
        ans = Math.max(ans, value)
    }
    return ans
};
nums = [100,4,200,1,3,2]
longestConsecutive(nums)