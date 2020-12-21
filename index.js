#!/usr/bin/env node

//const handleError = require('node-cli-handle-error');
const alert = require('pauli-alerts');

const log   = console.log; 
const init  = require('./utils/init');
const data  = require('./utils/data');
const cli   = require('./utils/cli');
const debug = require('./utils/debug');
const stats = require('./utils/stats');

const input = cli.input;
const flags = cli.flags;

(async() => {
    /* called an IIFE = Immediately Invoked Function Expression
    https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    */
   // Init and help.
    init(flags.minimal, flags.clear);
    input.includes('help') && cli.showHelp(0);

    // Print out the info 
    log(data.services);

    //second way to write this.
    flags.bio && log(data.bio);
    flags.social && log(data.social);
    flags.ad && alert({ type: 'info', msg: data.ad});
    /*if (flags.ad){
        alert({ type: 'info', msg: data.ad});
    }*/

    //Stats.
    await stats();

    //Debug info if needed
    debug(flags.debug, cli);
})();