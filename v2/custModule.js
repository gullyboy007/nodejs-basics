const path = require('path');

const getFileExt = ()=>{
    return path.extname(path.basename(__filename));
}

module.exports = getFileExt; //default export 

//naming export 
// module.exports = {
//    fileext:getFileExt;
//} 