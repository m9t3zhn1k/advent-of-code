import * as path from 'path'
import * as fs from 'fs'

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8').split('\n')

let elfs: Array<Array<string>> = []

let temp: string[] = []

data.forEach(item => {
  if (item) {
    temp.push(item)
  } else {
    elfs.push([...temp])
    temp.length = 0
  }
})

function findMaxCalls(elfs: Array<Array<string>>) {
  return elfs.map(arr => arr.reduce((a, b) => (a += +b), 0)).sort((a, b) => b - a)[0]
}

console.log(findMaxCalls(elfs))
