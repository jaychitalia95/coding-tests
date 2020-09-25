let x = (cost) => {
    // let p1 = 0
    // let p2 = 1
    // let answer = []
    // while(p2 < cost.length) {
    //     let p1_min = Math.min(...cost[p1])
    //     let p2_min = Math.min(...cost[p2])
    //     if(p1_min === p2_min) {
    //         answer.push([p1_min], cost())
    //     }
    // }
    cost.sort()
    console.log(cost)
}

x([[1,2,3], [1,2,3], [3,3,1]])