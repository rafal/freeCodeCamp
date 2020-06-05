function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({name, avgAlt}) => ({name, orbitalPeriod: Math.round(Math.sqrt((4*Math.pow(Math.PI, 2)*Math.pow(earthRadius + avgAlt, 3))/GM))}))
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

