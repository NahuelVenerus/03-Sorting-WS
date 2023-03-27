describe("Bubble Sort", function () {
  it("bubbleSort deberá invocar a swap", function () {
    let spy = spyOn(window, "swap").and.callThrough();
    bubbleSort([22, 4, 67, 5, 2]);
    expect(swap.calls.count()).toEqual(7);
  });

  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("ordena un arreglo desordenado", function () {
    let list = [3, 6, 2, 12, 7];
    expect(bubbleSort(list)).toEqual([2, 3, 6, 7, 12]);
  });

  it("un arreglo ordenado que debe mantenerse ordenado", function () {
    let list = [2, 3, 6, 7, 12];
    expect(bubbleSort(list)).toEqual([2, 3, 6, 7, 12]);
  });

  it("un arreglo a la inversa debe quedar ordenado", function () {
    let list = [12, 7, 6, 3, 2];
    expect(bubbleSort(list)).toEqual([2, 3, 6, 7, 12]);
  });
});
