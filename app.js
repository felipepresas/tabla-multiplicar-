const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicador");


// console.log(process.argv);
// console.log(argv);

// console.log('base:yargs',argv.b);

// const [,,arg3='base=5']= process.argv;
// const[,base=5] = arg3.split('=');
// console.log(base);



// const base = 5;
console.clear();

crearArchivo(argv.b,argv.h ,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch (err => console.log(err));

