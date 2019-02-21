function solve(arr, order){
   const ascendingComparator = function (a,b) {
     return a - b;
   }

   const descendingComparator = function (a,b) {
    return b - a;
  }

  let sortingStrategies = {
      'asc' : ascendingComparator,
      'desc' : descendingComparator
  }

  return arr.sort(sortingStrategies[order]);


}

