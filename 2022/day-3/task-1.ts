import * as path from 'path'
import * as fs from 'fs'

const data = fs
  .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .split('\n')
  .map(letters => {
    const length = letters.length

    const firstLetters = letters.slice(0, length / 2).split('')
    const secondLetters = letters.slice(length / 2)

    return Array.from(
      new Set(Array.from(firstLetters.filter(letter => secondLetters.includes(letter))))
    )
  })
  .flat()

let result = 0

function calcSum(letter: string) {
  if (letter.codePointAt(0)! - 'a'.codePointAt(0)! >= 0) {
    result += letter.codePointAt(0)! - 'a'.codePointAt(0)! + 1
  } else if (letter.codePointAt(0)! - 'z'.codePointAt(0)! < 0) {
    result += letter.codePointAt(0)! - 'A'.codePointAt(0)! + 27
  }
}

data.forEach(letter => calcSum(letter))

console.log(result)
