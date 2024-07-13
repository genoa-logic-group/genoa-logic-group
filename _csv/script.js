const fs = require('fs') 
const parse = require('csv-parse/sync').parse 

function capitalizeAll(str) {
  const words = str.split(" ")
  let res = "" 
  for (let i = 0; i < words.length; i++) {
    res = res + words[i].charAt(0).toUpperCase() + words[i].slice(1) + " " 
  }
  return res 
}

const input = 'participants.csv' 
const output = 'participants.yml' 
const emails = 'emails.txt' 
const enc = 'utf8'

const invited = ['Awodey','Maietti','Moggi','Vitale','Streicher']

const opt = { 
 columns: hd => ['timestamp','email','name','surname','affiliation','website',undefined], 
  skip_empty_lines: true
} 

let data = parse(fs.readFileSync(input,enc), opt) 

fs.writeFileSync(output, "") 
fs.writeFileSync(emails, "") 

let emailsList = []
let count = 0 

for (let item of data) {
  if (!invited.includes(item.surname) && !emailsList.includes(item.email)) { 
    count += 1 
    if (item.website == "Yes") { 
      fs.appendFileSync(output, `- name: ${capitalizeAll(item.name)}\n`)
      fs.appendFileSync(output, `  surname: ${capitalizeAll(item.surname)}\n`)
      fs.appendFileSync(output, `  affiliation: ${item.affiliation}\n`)
    } 
    emailsList.push(item.email) 
    fs.appendFileSync(emails,`${item.email},\n`) 
  } 
} 

console.log("participants " + count) 




