import * as path from 'path'
import * as fs from 'fs'

type pairIDs = [string, string, string, string]

const data = fs
  .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .split('\r\n')
  .map(pair =>
    pair
      .split(',')
      .map(ids => ids.split('-'))
      .flat()
  ) as pairIDs[]

function calcOverlaps(data: pairIDs[]) {
  let counter = 0

  data.forEach(pair => {
    if (
      (+pair[1] >= +pair[2] && +pair[1] <= +pair[3]) ||
      (+pair[0] <= +pair[3] && +pair[0] >= +pair[2]) ||
      (+pair[0] <= +pair[2] && +pair[1] >= +pair[3])
    ) {
      console.log(pair)
      ++counter
    }
  })

  return counter
}

console.log(calcOverlaps(data))
