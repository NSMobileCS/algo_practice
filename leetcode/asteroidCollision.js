/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    let rightMoving = [];
    for (let idx=0; idx<asteroids.length; idx++) {
        if (asteroids[idx] > 0) {
            rightMoving.push(idx);
        } else {
            if (rightMoving.length > 0) {
                let rdx = rightMoving.pop();
                let winner = asteroids[rdx] + asteroids[idx];
                if (winner === 0) {
                    asteroids.splice(rdx, 2);
                } else {
                    asteroids.splice(rdx, 2, winner);
                    if (winner > 0) {
                       rightMoving.push(rdx);
                    } else {

                    }
                }

            };
        }
    }
    
};
