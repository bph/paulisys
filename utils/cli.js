const meow = require('meow');
const { green, yellow, cyan, dim} = require('chalk');

// const cli = meow(`RUN: npx paulisys`);

const helpText = `
    Usage
       ${green(`npx paulisys`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}
    
    Options
       ${yellow(`--clear`)}       Clear the console
       ${yellow(`--no-clear`)}    Don't clear the console
       ${yellow(`--social`)}      Print the social info ${dim(`(DEFAULT: true)`)}
       ${yellow(`--no-social`)}   Don't print the social info
       ${yellow(`--bio`)}         Print the bio info ${dim(`(DEFAULT: true)`)}
       ${yellow(`--no-bio`)}      Don't print the bio info
       ${yellow(`--ad`)}          Print the ad info ${dim(`(DEFAULT: true)`)}
       ${yellow(`--no-ad`)}       Don't print the ad
       ${yellow(`-p`)} ${yellow(`--posts`)}    Show list of 10 blog posts
       ${yellow(`-d`)} ${yellow(`--debug`)}    Print debug info
       ${yellow(`-v`)} ${yellow(`--version`)}  Print CLI version info
       ${yellow(`-m`)} ${yellow(`--minimal`)}  Print minimal info

    Commands 
       ${cyan(`help`)}          Print CLI help info   

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
        posts: {
            type: 'boolean',
            default: false,
            alias: 'p',
        }

    },
};

module.exports = meow(helpText, options);