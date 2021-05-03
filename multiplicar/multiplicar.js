const fs = require('fs');
const colors = require('colors');

let listTable = ( base, limit = 10 ) => {

    return new Promise ((res, rej) => {
        if ( !Number(base) || !Number(limit) ) {
            rej(`El valor introducido: ${ base } o ${ limit }, not is number`);
            return;
        }
        return res(generateDataTable(base, limit));
    })
}

let createFile = ( base, limit = 10 ) => {
    return new Promise ((res, rej) => {

        if ( !Number(base) ) {
            rej(`The valor introduced: ${ base }, not is number`);
            return;
        }
        let data = generateDataTable(base, limit);
        let nameFile = `table-${ base }-to-${ limit }.txt`;
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tables/${ nameFile }`, data, (err) => {
          if (err) rej(err);
          else res(nameFile);
        });
    })
}

let generateDataTable = ( base, limit ) => {
    let header = `
    \n=======================
    \nTabla de ${ base }
    \n=======================\n`.green;

    let data = '';
    for (let i = 0; i <= limit; i++) {
        const numero = i * base;
        data += `${ base } * ${ i } = ${ numero }\n`;
    }
    return header+data;
}

module.exports = {
    createFile,
    listTable
}