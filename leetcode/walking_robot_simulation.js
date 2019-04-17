/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */

const moveDirection = {
    N: [0,-1],
    W: [-1, 0],
    S: [0,1],
    E: [1,0]
};

const directions = ['W', 'N', 'E', 'S'];

var robotSim = function(commands, obstacles) {
    let maxDist = 0;
    let oriented = 1;
    let curPos = [0, 0];
    for (let cmd of commands) {
        if (cmd < 0) {
            if (cmd === -1) {
                oriented = ++oriented % 4;
            } else if (cmd === -2) {
                oriented--;
                if (oriented < 0) {
                    oriented += 4;
                }
            }
        } else {
            if (oriented == 1) {

            }
        }
    }
};

// this one is kind of tedious and it's an easy question. waste of time?