var findMinArrowShots = function (points) {
    let balooons = points.sort((a, b) => a[0] - b[0]);
    let arrowsFired = 0;
    let unbrokenBaloons = balooons;
    unbrokenBaloons.forEach(balloon => {
        let length = balloon[1] - balloon[0]
        for (let i = balloon[0]; i < balloon[1]; i++){
            
        }
    })
};