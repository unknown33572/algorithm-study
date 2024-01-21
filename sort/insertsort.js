function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;

      // 정렬된 부분에서 현재 요소보다 큰 요소를 오른쪽으로 이동시킵니다
      while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
      }

      // 현재 요소를 적절한 위치에 삽입합니다
      arr[j + 1] = current;
  }

  return arr;
}

// 예제 배열
let array = [3, 1, 5, 4, 2];
insertionSort(array);
console.log(array);