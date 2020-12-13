#!/usr/bin/env node

//const handleError = require('node-cli-handle-error');
const alert = require('pauli-alerts');

const log   = console.log; 
const init  = require('./utils/init');
const data  = require('./utils/data');
const cli   = require('./utils/cli');
const debug = require('./utils/debug');

const input = cli.input;
const flags = cli.flags;

(async() => {
    /* called an IIFE = Immediately Invoked Function Expression
    https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    */
    init(flags.minimal, flags.clear);
    
    input.includes('help') && cli.showHelp(0);

    log(data.services);

    //second way to write this.
    flags.bio && log(data.bio);

    
    
    if (flags.social){
        log(data.social);
    }

    if (flags.ad){
        alert({ type: 'info', msg: data.ad});
    }

    //Debug info if needed
    debug(flags.debug, cli);
})();