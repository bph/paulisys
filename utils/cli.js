const meow = require('meow');
const meowHelp = require('cli-meow-help');
const { green, yellow, cyan, dim} = require('chalk');

// const cli = meow(`RUN: npx paulisys`);

/* hand written helptext 
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
*/
// all will be replaced by the meowHelper call

const flags = {
    ad: {
        type: 'boolean',
        default: true,
        desc: `Print the ad info`,
    },
    'no-ad':{
        type: 'boolean',
        default: false,
        desc: `Does not print ad`,
    },
    bio: {
        type: 'boolean',
        default: true,
        desc: `Print the bio info`,
    },
    'no-bio':{
        type: 'boolean',
        default: false,
        desc: `Does not print bio info`,
    },
    clear: {
        type: 'boolean',
        default: true,
        desc: `Clear the console`,
    },
    'no-clear':{
        type: 'boolean',
        default: false,
        desc: `Does not clear the console.`,
    },
    debug: {
        type: 'boolean',
        default: false,
        alias: 'd',
    },
    minimal: {
        type: 'boolean',
        alias: 'm',
        default: false,
        desc: `Print minimal info`,
    },
    posts: {
        type: 'boolean',
        default: false,
        alias: 'p',
        desc: `Show list of 10 blog posts`,
    },
    'no-posts': {
        type: 'boolean',
        default: false,
        desc: `Don't show blog posts`,
    },
    social: {
        type: 'boolean',
        default: true,
        desc: `Print the social info`,
    },
    'no-social': {
        type: 'boolean',
        default: false,
        desc: `Does not print ad`,
    },
    version: {
        type: 'boolean',
        default: false,
        alias: 'v',
        desc: `Print CLI version info`,
    },
};
const commands = {
    help: {
        desc: `Print the help info`,
    },
};

const helpText = meowHelp({
    name: `npx paulisys`,
    flags,
    commands,
    defaults: false,
})
const options = {
    inferType: true,
    description: false,
    hardRejections: false,
    flags,
};

module.exports = meow(helpText, options);