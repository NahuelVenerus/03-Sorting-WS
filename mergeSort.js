function split(wholeArray) {
  if (wholeArray.length == 0) return wholeArray;
  let firstHalf = wholeArray.slice(0, wholeArray.length / 2);
  let secondHalf = wholeArray.slice(wholeArray.length / 2);
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
  if (array.length < 2) return array;
  let [firstHalf, secondHalf] = split(array);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(firstList, secondList) {
  if(!firstList || !secondList) return []
  let list = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    if (firstList[i] < secondList[j]) {
      list.push(firstList[i]);
      i++;
    } else {
      list.push(secondList[j]);
      j++;
    }
  }
  if (firstList[i]) list.push(...firstList.slice(i));
  else list.push(...secondList.slice(j));
  return list;
}