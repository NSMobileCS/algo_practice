function cakes(recipe, available) {
  let counts = [];
  for (let ingred in recipe) {
      let nCakes = Math.floor( available[ingred] / recipe[ingred] );
      if ( Number.isNaN(nCakes) || !(Number.isFinite(nCakes)) ) return 0;
      counts.push(nCakes);
  }
  return counts.sort( (a,b) => ( 1.0*a > 1.0*b ) )[0];
}
