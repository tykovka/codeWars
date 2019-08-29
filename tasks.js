/**  kata 7
 * credit card mask
*/
function mask (cc) {
  res = '';
  slice = cc.slice(cc.length - 4, cc.length);
  cc = cc.slice(0,cc.length - 4);
  cc = cc.replace(/\w/g,'#');
  res = cc + slice;
  return res;
}

function maskFast (cc) {
  return cc.slice(0, -4).replace(/\w/g,'#') + cc.slice(-4);
}

/**
 * kata 8
 */

arr = [0,1,1,0];
function translNumberSystem (arr, system){
  str = arr.join('');
  return parseInt(str,system)
}
console.log(translNumberSystem(arr,2));

