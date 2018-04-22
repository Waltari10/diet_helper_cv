export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// minimum number of single character edits to (insertions, deletions or substitutions)
// to turn the other string into the other
// https://people.cs.pitt.edu/~kirk/cs1501/Pruhs/Spring2006/assignments/editdistance/Levenshtein%20Distance.htm

// getEditDistance('taro', 'papri')

export function getEditDistance(s, t) {
  const n = s.length
  const m = t.length

  if (n === 0) return m
  if (m === 0) return n

  // Init matrix
  let matrix = new Array(n + 1).fill()
  matrix = matrix.map(() => new Array(m + 1).fill())


  matrix = matrix.map((arr, i) => (
    arr.map((value, k) => {
      if (i === 0) {
        return k
      } else if (k === 0) {
        return i
      }

      return undefined
    })
  ))


  s.split('').forEach((i, sIndex) => {
    const sIndexPlusOne = sIndex + 1

    t.split('').forEach((j, tIndex) => {
      const tIndexPlusOne = tIndex + 1

      let cost = 1
      if (i === j) {
        cost = 0
      }

      // Set cell d[i,j] of the matrix equal to the minimum of:
      // a. The cell immediately above plus 1: d[i-1,j] + 1.
      // b. The cell immediately to the left plus 1: d[i,j-1] + 1.
      // c. The cell diagonally above and to the left plus the cost: d[i-1,j-1] + cost.

      const cellAbove = matrix[sIndexPlusOne - 1][tIndexPlusOne]

      const cellLeft = matrix[sIndexPlusOne][tIndexPlusOne - 1]

      const cellAboveAndLeft = matrix[sIndexPlusOne - 1][tIndexPlusOne - 1]


      const min = Math.min(
        cellAbove + 1,
        cellLeft + 1,
        cellAboveAndLeft + cost
      )


      matrix[sIndexPlusOne][tIndexPlusOne] = min
    })
  })
  return matrix[n][m]
}

export function getWordPercentageMatch(s, t) {
  const dist = getEditDistance(s, t)

  const longestWordLength = Math.max(
    s.length,
    t.length
  )

  return (1 - (dist / longestWordLength)) * 100
}
