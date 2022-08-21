


module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return [];
  }else if(matrix.length == 1){
    return matrix;
  }else{
    let newArr = [];
    for(let i = 0; i < matrix.length; i++){
      if(i%2 > 0){
        matrix[i].sort(function(a, b) {
          return b - a;
        });
      }
      newArr = newArr.concat(matrix[i]);
    }
    return newArr;
  }
  
}
