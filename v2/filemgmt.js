//file management eith fs module

const fs = require('fs');

const files = fs.readdirSync('./')
console.log(files)

//read custome text file

const text = fs.readFileSync('./text.txt', {encoding:'utf-8'})

console.log(text)

//append or write data 

fs.writeFile('newfile.txt', 'example text',{ flag: 'a+' }, (err) => {
    if(err){
        console.log(err)
    }
})