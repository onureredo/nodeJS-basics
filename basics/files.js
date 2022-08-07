const fs = require('fs');

// Reading files
// fs.readFile('./docs/blog.txt',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// Writing files

// fs.writeFile('./docs/blog.txt', 'Hello World!', () => {
//     console.log('file was written');
// });

// for non existing file, it will create one
// fs.writeFile('./docs/blog3.txt', 'Hello Again!', () => {
//     console.log('File is created');
// });

// Create directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
// });
// } else {
//     fs.rmdir('./assets',(err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('Folder deleted');
//     })
// }


// Deleting Files

if (fs.existsSync('./docs/blog3.txt')) {
    fs.unlink('./docs/blog3.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File deleted');
    })
}

