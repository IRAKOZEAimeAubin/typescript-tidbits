// Function to find common elements in two arrays
const findCommonElements = (array1: unknown[], array2: unknown[]) => {
  return array1.filter((element) => array2.includes(element))
}

console.log(
  findCommonElements([12, 67, 89], [21, 34, 56, 78, 92, 37, 43, 67, 56, 12]),
)

// Function to flatten an array
const flatten = (arr: unknown[][]) => {
  return arr.flat(Infinity)
}

const flattenToo = (arr: unknown[][]) => {
  return arr.reduce((a: unknown[], b: unknown[]) => a.concat(b))
}

console.log(
  flattenToo([
    [2, 4, 6, 8],
    [10, 12, 14],
    [16, 18, 20],
  ]),
)

const sortArr = (arr: number[]) => {
  return arr.sort((a, b) => b - a)
}

console.log(sortArr([21, 34, 56, 78, 92, 37, 43, 67, 56, 12]))
