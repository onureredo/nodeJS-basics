
// console.log(global);

setTimeout(() => {
    console.log('in TIMEOUT!');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
   console.log('in INTERVAL!'); 
}, 1000);

// console.log(__dirname);
// console.log(__filename);