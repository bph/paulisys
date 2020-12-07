const meow = require('meow');

// const cli = meow(`RUN: npx paulisys`);

const helpText = `
    Usage
        npx paulisys [options] <commands>
    
    Options
        social       Pring the social info
        --no-social  Don't pring the social info
        ad           Print the ad information
        --no-ad      Don't pring the ad
        -d --debug   Print debug information
        -v --version Print CLI version information

    Commands 
        help        Print CLI help information   

    Examples
        npx paulisys --no-social

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