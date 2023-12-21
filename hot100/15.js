var threeSum = function(nums) {
    let result = []
    nums.sort((a,b) => a-b )
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0) break;
        if(nums[i] === nums[i-1]){
            continue
        }

        let left = i+1
        let right = nums.length-1
        while(left<right){
            if(nums[i]+nums[left]+nums[right] === 0){
                result.push([nums[i],nums[left],nums[right]])
                while (left<right && nums[left] == nums[left+1]) left++; // 去重
                while (left<right && nums[left] == nums[right-1]) right--; // 去重
                left++
                right--
            }else if(nums[i]+nums[left]+nums[right] > 0){
                right--
            }else{
                left++
            }
        }
    }
return result
};

nums = [-1,0,1,2,-1,-4]
const res = threeSum(nums)
console.log('ress   ', res)