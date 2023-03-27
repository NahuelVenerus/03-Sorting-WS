function bubbleSort(array) {
  let list = [];
  let bool = false;
  while (!bool) {
    bool = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        list = swap(array[i - 1], array[i]);
        array[i - 1] = list[0];
        array[i] = list[1];
        bool = false;
      }
    }
  }
  return array;
}

function swap(a, b) {
  return [b, a];
}
