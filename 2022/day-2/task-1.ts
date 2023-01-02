import * as path from 'path'
import * as fs from 'fs'

const data = fs
  .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .split('\n')
  .map(item => item.split(' '))

let points = 0

function calcResults(step: string[]) {
  points += step[1] === 'X' ? 1 : step[1] === 'Y' ? 2 : 3

  points +=
    (step[0] === 'A' && step[1] === 'Y') ||
    (step[0] === 'B' && step[1] === 'Z') ||
    (step[0] === 'C' && step[1] === 'X')
      ? 6
      : step[1].charCodeAt(0) - step[0].charCodeAt(0) === 23
      ? 3
      : 0
}

data.forEach(step => calcResults(step))

console.log(points)
