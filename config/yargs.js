const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:'es el limete de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'listar en consola tabla'
    })
    .argv;

    module.exports = argv;