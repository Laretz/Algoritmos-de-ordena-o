function bubblesort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] >= array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }
  
  const vetor = [3, 35, 7, 83, 104, 12, -25, 22, 105];
  
  bubblesort(vetor);
  console.log(vetor);
  