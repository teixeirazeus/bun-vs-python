# benchmark.py

# Fibonacci Recursivo
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# QuickSort
def quickSort(arr: list) -> list:
    if len(arr) <= 1:
        return arr

    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]

    return quickSort(left) + [pivot] + quickSort(right)

# Multiplicação de Matrizes
def matrixMultiply(A: list, B: list) -> list:
    result = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]

    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                result[i][j] += A[i][k] * B[k][j]

    return result

# Teste
for i in range(1000000):
    fibonacci(10)
    quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
    matrixMultiply([[1,2,3], [4,5,6]], [[7,8], [9,10], [11,12]])
