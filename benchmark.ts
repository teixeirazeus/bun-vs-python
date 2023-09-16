// benchmark.ts

// Fibonacci Recursivo
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// QuickSort
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Multiplicação de Matrizes
function matrixMultiply(A: number[][], B: number[][]): number[][] {
    let result = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Teste
for(let i = 0; i < 1000000; i++) {
    fibonacci(10);
    quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);
    matrixMultiply([[1,2,3], [4,5,6]], [[7,8], [9,10], [11,12]]);
}