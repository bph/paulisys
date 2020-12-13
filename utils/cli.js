const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

// const cli = meow(`RUN: npx paulisys`);

const helpText = `
    Usage
       ${green(`npx paulisys`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}
    
    Options
       ${yellow(`--clear`)}       Clear the console
       ${yellow(`--no-clear`)}    Don't clear the console
       ${yellow(`--social`)}      Print the social info
       ${yellow(`--no-social`)}   Don't print the social info
       ${yellow(`--bio`)}         Print the bio
       ${yellow(`--no-bio`)}      Don't print the bio
       ${yellow(`--ad`)}          Print the ad information
       ${yellow(`--no-ad`)}       Don't print the ad
       ${yellow(`-d`)} ${yellow(`--debug`)}    Print minimal information
       ${yellow(`-v`)} ${yellow(`--version`)}  Print CLI version information
       ${yellow(`-m`)} ${yellow(`--minimal`)}  Print debug information

    Commands 
       ${cyan(`help`)}          Print CLI help information   

    Examples
       ${green(`npx paulisys`)} ${yellow(`--no-social`)}
       ${green(`npx paulisys`)} ${yellow(`--no-ad`)}

`;
const options = {
    flags: {
        minimal: {
            type: 'boolean',
            alias: 'm',
            default: false,
        },
        clear: {
            type: 'boolean',
            default: true,
        },
        social: {
            type: 'boolean',
            default: true,
        },
        bio: {
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