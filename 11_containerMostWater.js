var maxArea = function(height) {
    let maxAreaSoFar = 0
    let start = 0
    let end = height.length;

    while(start < end) {
        let area = (end - start)*(Math.min(height[start], height[end]))
        if(area > maxAreaSoFar) {
            maxAreaSoFar = area
        }
        if(height[start] <= height[end]) start++
        else end--
    }
    console.log(maxAreaSoFar)
    return maxAreaSoFar
};

maxArea([1,8,6,2,5,4,8,3,7])