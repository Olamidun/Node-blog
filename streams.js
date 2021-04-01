// This is used when we have large file of data and we need to start working on it before it loads completely

const fs = require('fs')

// Read streams

readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk)=>{

//     console.log(chunk)

//     writeStream.write('\n NEW CHUNK\n')

//     writeStream.write(chunk)
// })

//PIPING

readStream.pipe(writeStream)