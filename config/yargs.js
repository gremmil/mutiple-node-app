
const options = {
    base: {
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Print in console the multiple table', options)
    .command('create', 'Create a file the multiple table', options)
    .demandOption(['base'], 'Please provide both run and path arguments to work with this tool')
    .help()
    .argv;

module.exports = {
    argv
}