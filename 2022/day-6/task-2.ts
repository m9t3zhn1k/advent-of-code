import * as path from 'path'
import * as fs from 'fs'

const data: string = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')

let count = 0

data.split('').some((_, index, array) => {
  if (index < 13) {
    return false
  } else {
    count = index + 1
    if (Array.from(new Set(array.slice(index - 13, index + 1))).length === 14) {
      return true
    }
    return false
  }
})

console.log(count)
