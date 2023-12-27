var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0]-b[0])

    for(let i=1;i<intervals.length;i++){
        // intervals[i][0]在上个区间中间
        if(intervals[i][0] < intervals[i-1][1] || intervals[i][0] === intervals[i-1][1]){
            let R= Math.max(intervals[i][1], intervals[i-1][1])
            intervals[i-1] = [intervals[i-1][0], R]
            intervals.splice(i,1)
            i--
        }
    }
    return intervals
};

intervals = [[1,3],[2,6],[8,10],[15,18]]
const res = merge(intervals)
console.log(res)
