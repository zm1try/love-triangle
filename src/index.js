/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let p = preferences;
  let count = 0;
  for(let i = 0; i < p.length; i++)
    if (p[p[p[i]-1]-1]-1 === i && (p[i]-1) !== i) count++;
  return count/3;
};
