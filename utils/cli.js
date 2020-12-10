const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

// const cli = meow(`RUN: npx paulisys`);

const helpText = `
    Usage
       ${green(`npx paulisys`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}
    
    Options
       ${yellow(`--social`)}      Pring the social info
       ${yellow(`--no-social`)}   Don't print the social info
       ${yellow(`--ad`)}          Print the ad information
       ${yellow(`--no-ad`)}       Don't print the ad
       ${yellow(`-d`)} ${yellow(`--debug`)}    Print debug information
       ${yellow(`-v`)} ${yellow(`--version`)}  Print CLI version information

    Commands 
       ${cyan(`help`)}          Print CLI help information   

    Examples
       ${green(`npx paulisys`)} ${yellow(`--no-social`)}
       ${green(`npx paulisys`)} ${yellow(`--no-ad`)}

`;
const options = {
    flags: {
        social: {
            type: 'boolean',
            default: true,
        },
        ad: {
            type: 'boolean',
            default: true,
        },
        debug: {
            type: 'boolean',
            default: false,
            alias: 'd',
        },
        version: {
            type: 'boolean',
            default: false,
            alias: 'v',
        },

    },
};



module.exports = meow(helpText, options);