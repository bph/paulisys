const meow = require('meow');

// const cli = meow(`RUN: npx paulisys`);

const helpText = `
    Usage
        npx paulisys [options]
    
    Options
        social      Show the social info
        --no-social Don't show the social info
        ad          Show the ad
        --no-ad     Don't show the ad
        -d --debug  Print debug information

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

    },
};



module.exports = meow(helpText, options);