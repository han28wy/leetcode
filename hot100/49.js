var groupAnagrams = function(strs) {
    const map = new Map()
    for(let str of strs){
        // 重新排列后的
        let array = Array.from(str)
        array.sort()
        let key = array.toString()
        if(map.get(key)) {
            const list_ex = map.get(key)
            list_ex.push(str)     
        } else {
            const list = new Array()
            list.push(str)
            map.set(key, list)
        }
    }
    const res = Array.from(map.values())
      console.log(res)
      return res
};
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)
