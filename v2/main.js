const readline = require('readline')
const fileExt = require('./custModule')

/*Name module import 
console.log(fileModule.fileExt())

const {fileExt} = require('./custModule.js')
console.log(fileExt())
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Whats your name? ', (answer) => {
    console.log(answer);
    process.exit()
})
