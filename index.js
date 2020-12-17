function findMinAndRemove(array){
  let minVal = array[0];
  let minIndex = 0;
  let i;
  for (i=1; i<array.length; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
      minIndex = i;
    }
  }
  array.splice(i,1)
  return minVal;
}

function selectionSort(array){
  let newArr = [];
  while (array.length > 0) {
    newArr.push(findMinAndRemove(array));
    selectionSort(newArr);
  }
  return newArr;
}
