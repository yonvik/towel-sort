
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //for (let i = 0; i < matrix.length; i++){
  //  
  //  let train = [];
//
  //  for (let k = 0; k < matrix[i].length; k++) {
  //   train[i].push(k);
  //   return (train);
   // } 
  //    } 



//let newArr = []
//
//let i = 0;
//for (subArray of matrix) {
//  if ( i % 2 === 0) {
//    newArr = [...newArr, ...subArray]
//  } else {
//    newArr = [...newArr, ...subArray.reverse()]
//  }
//  i++
//  };
//  newArr.forEach( e => console.log(e))
//  return (newArr)



  
 // for(let i = 0; i < matrix.length; i++){
 //   if(i % 2) { /
  //    matrix[i].reverse(); 
 //   }
//}
//return matrix.reduce((acc, subArray) => acc.concat(subArray), [])

if (!matrix) return [];
let answer = matrix.reduce((res, arr, i) => {
  arr = i%2 == 1 ? arr.reverse() : arr;
  return res.concat(arr);
}, [])
return answer;

} 

  