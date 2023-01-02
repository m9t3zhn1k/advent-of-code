import * as path from 'path'
import * as fs from 'fs'

type rucksacks = string[]

const data = fs
  .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .split('\n')
  .map(string => string.substring(0, string.length - 1))
  .slice(0, 300)

let subData: rucksacks[] = []

const subArrayLength = 3

for (let i = 0; i < data.length; i += subArrayLength) {
  subData.push(data.slice(i, i + subArrayLength))
}

const commonLetters = subData.map(rucksacks => {
  let result = ''

  rucksacks[0].split('').some(letter => {
    const common = rucksacks.every(rucksack => rucksack.includes(letter))

    if (common) {
      result = letter
    }
  })

  return result
})

const result = commonLetters.reduce((acc, letter) => {
  return (acc +=
    letter.codePointAt(0)! - 'a'.codePointAt(0)! >= 0
      ? letter.codePointAt(0)! - 'a'.codePointAt(0)! + 1
      : letter.codePointAt(0)! - 'A'.codePointAt(0)! + 27)
}, 0)

console.log(result)
