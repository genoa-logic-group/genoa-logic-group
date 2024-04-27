const fs = require('fs') 
const parse = require('csv-parse/sync').parse 

const input = 'participants.csv' 
const output = 'participants.yml' 
const enc = 'utf8'

let opt = { 
 columns: true, 
  skip_empty_lines: true
} 

let data = parse(fs.readFileSync(input,enc), opt) 

fs.writeFileSync(output, "") 

data.forEach( item => { 
  fs.appendFileSync(output, `- name: ${item.Name}\n`)
  fs.appendFileSync(output, `  surname: ${item.Surname}\n`)
  fs.appendFileSync(output, `  affiliation: ${item.Affiliation}\n`)
}) 




