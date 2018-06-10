/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (moves.length < 2) return false;
  let state = [0, 0];
  for ( let move of moves ) {
    if ( move == 'L' ) {
      state[0] -= 1;
      continue;
    }
    if ( move == 'R' ) {
      state[0] += 1;
      continue;
    }
    if ( move == 'D' ) {
      state[1] -= 1;
      continue;
    }
    if ( move == 'U' ) {
      state[1] += 1;
      continue;
    }
  }
  return (  ( state[0] == 0 )  &&  ( state[1] == 0 )  );  // looks neat; may optimize/save ref compare error
};
