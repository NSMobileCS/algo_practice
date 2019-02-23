/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let leftMoving = [];
    let rightMoving = [];
    for (let idx=asteroids.length; idx<-1; idx--) {
        if (asteroids[idx] > 0) {
            rightMoving.push(idx);
        } else {
            leftMoving.push(idx);
        }
        while (leftMoving.length > 0 && rightMoving.length > 0) {

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
