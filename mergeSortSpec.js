describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5]).length).toEqual(2);
  });

  it("no debería dar error si el array está vacío", function () {
    expect(split([])).toEqual([]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    let list1 = [1, 2, 3]
    let list2 = [4, 5, 6]
    expect(merge(list1, list2)).toEqual([1, 2, 3, 4, 5, 6])
  });
  
  it("devuelve un array vacío si los 2 que recibe lo están", function(){
    let list1 = []
    let list2 = []
    expect(merge(list1, list2)).toEqual([])
  })
  
  it("devuelve un array vacío si alguno de los que recibe es undefined", function(){
    let list1
    let list2
    expect(merge(list1, list2)).toEqual([])
  })

  it("ignora datos que no sean del tipo array", function(){
    expect(merge(15, [1, 2, 3])).toEqual([1, 2, 3])
  })
});

describe("MergeSort", function () {
  it("handles an empty array", function () {
    expect(mergeSort([])).toEqual([]);
  });

  it("ordena un arreglo desordenado", function () {
    let list = [3, 6, 2, 12, 7];
    expect(mergeSort(list)).toEqual([2, 3, 6, 7, 12]);
  });

  it("un arreglo ordenado que debe mantenerse ordenado", function () {
    let list = [2, 3, 6, 7, 12];
    expect(mergeSort(list)).toEqual([2, 3, 6, 7, 12]);
  });

  it("un arreglo a la inversa debe quedar ordenado", function () {
    let list = [12, 7, 6, 3, 2];
    expect(mergeSort(list)).toEqual([2, 3, 6, 7, 12]);
  });
});
