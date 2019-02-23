/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let rtQueue = [];
    let output = [];
    for (let idx=0; idx<asteroids.length; idx++) {
        let cur = asteroids[idx];
        if (cur > 0) {
            rtQueue.push(cur);
        } else {
            if (rtQueue.length < 1 && cur < 0) {
                output.push(cur); // nothing to the left for it to hit
            } else {
                while (rtQueue.length > 0) {
                    if (cur + rtQueue[rtQueue.length-1] > 0){
                        cur = undefined;
                        break;
                    } else {
                        let tmp = rtQueue.pop();
                        if (cur + tmp === 0) {
                            cur = undefined;
                            break;
                        }
                    }
                }
                if (cur) {
                    output.push(cur);
                }
            }
        }
    }
    return output.concat(rtQueue);
};



console.log(asteroidCollision([5, 10, -5]));
console.log('^ should be [5, 10]');
console.log('---');



console.log(asteroidCollision([8, -8]));
console.log('^ should be []');
console.log('---');


console.log(asteroidCollision([-2,-2,1,-2]));
console.log('^ should be [-2,-2,-2]');
console.log('---');







