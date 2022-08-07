// //EXPORT OPTION I

// const xyz = require('./people');

// // console.log(xyz);
// console.log(xyz.people, xyz.ages);

// //EXPORT OPTION II

const { people, ages} = require('./people');



const os = require('os');

console.log(os.platform(), os.homedir());