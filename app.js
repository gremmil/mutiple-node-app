const { argv } = require("./config/yargs");
const colors = require('colors/safe');
const { createFile, listTable } = require("./multiplicar/multiplicar");

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
        .then(list => console.log(`Lista:\n${list}`))
        .catch(err => console.log(err));        
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Commando no reconocido');
        break;
}
//console.log(argv.base);
/* let parametro = argv[2];
let base = parametro.split('=')[1];
 */
/* createFile( base )
    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch( err => console.log(err)); */