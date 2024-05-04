const fs = require('fs') 
const parse = require('csv-parse/sync').parse 

const input = 'participants.csv' 
const output = 'participants.yml' 
const emails = 'emails.txt' 
const enc = 'utf8'

const invited = ['Awodey','Maietti','Moggi']

let opt = { 
 columns: hd => ['timestamp','email','name','surname','affiliation','website',undefined], 
  skip_empty_lines: true
} 

let data = parse(fs.readFileSync(input,enc), opt) 

fs.writeFileSync(output, "") 
fs.writeFileSync(emails, "") 

data.forEach( item => { 
  if (!invited.includes(item.surname)) { 
    fs.appendFileSync(emails,`${item.email},\n`) 
    if (item.website) { 
      fs.appendFileSync(output, `- name: ${item.name}\n`)
      fs.appendFileSync(output, `  surname: ${item.surname}\n`)
      fs.appendFileSync(output, `  affiliation: ${item.affiliation}\n`)
    } 
  } 
}) 




