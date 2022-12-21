/*
// handling async errors via callbacks
import { readFile } from "fs"

readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
    if(err){
        //handle the error
        //console.log(err)
        throw err
    }else{
        //do what you want
    }
})
*/

// handling async errors via promise
/*
import { readFile } from "fs/promises"

try {
    readFile(new URL('app.mj', import.meta.url), 'utf-8') 
}
catch(e)
{
    console.error(e)
    console.log('program complete')
}
*/

import { readFile } from "fs/promises"

const result = readFile(new URL('app.mj', import.meta.url), 'utf-8')
.catch(e => {
    console.log('error says hello')
})

console.log('program complete')
