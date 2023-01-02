import * as path from 'path'
import * as fs from 'fs'

const data = fs
  .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .split('\n')
  .map(item => item.split(' '))

let points = 0

function calcResults(step: string[]) {
  points += step[1] === 'X' ? 0 : step[1] === 'Y' ? 3 : 6

  const enemyStep = step[0] === 'A' ? 1 : step[0] === 'B' ? 2 : 3

  if (step[1] === 'Y') {
    points += enemyStep
  } else if (step[1] === 'X') {
    if (enemyStep === 1) {
      points += 3
    } else if (enemyStep === 2) {
      points += 1
    }
    if (enemyStep === 3) {
      points += 2
    }
  } else if (step[1] === 'Z') {
    if (enemyStep === 1) {
      points += 2
    } else if (enemyStep === 2) {
      points += 3
    }
    if (enemyStep === 3) {
      points += 1
    }
  }
}

data.forEach(step => calcResults(step))

console.log(points)
