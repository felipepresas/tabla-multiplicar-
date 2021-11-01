const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base,hasta=10, listar) => {

    try {

        let salida = '';
        let multiplicador = 0;

        while (multiplicador <= hasta) {
            salida += (`${base} x ${multiplicador} = ${base * multiplicador}\n`)
            multiplicador++;
        }
        if (listar) {
            console.log('==============================='.random)
            console.log(colors.random(`=========Tabla del :${base}==========`))
            console.log(colors.random('==============================='))
            console.log(colors.america(salida));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt creado`)

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}