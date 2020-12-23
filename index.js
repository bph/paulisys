#!/usr/bin/env node

//const handleError = require('node-cli-handle-error');
const alert = require('pauli-alerts');
//const { Toggle } = require('enquirer');

const log   = console.log; 
const init  = require('./utils/init');
const data  = require('./utils/data');
const cli   = require('./utils/cli');
const debug = require('./utils/debug');
//const stats = require('./utils/stats');
const posts = require('./utils/posts');

const input = cli.input;
const flags = cli.flags;

(async() => {
    /* called an IIFE = Immediately Invoked Function Expression
    https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    */
   // Init and help.
    init(flags.minimal, flags.clear);
    input.includes('help') && cli.showHelp(0);

    /* exampls of a Toggle user prompt
    const prompt = new Toggle({
        message: 'Tell us about your class?',
        enabled: `2020`,
        disabled: `2021`,
    })

    const isClass2020 = await prompt.run()
    log(`isClass2020`, isClass2020);
    */
  
    // Print out the info 
    log(data.services);

    //second way to write this.
    flags.bio && log(data.bio);
    flags.social && log(data.social);
    flags.ad && alert({ type: 'info', msg: data.ad});
   
    /*if (flags.ad){
        alert({ type: 'info', msg: data.ad});
    }*/
    flags.posts && alert({ type: 'success', msg: data.blog, name: 'News'});
    flags.posts && await(posts());
  
    //Stats.
    //await stats();
   
    //Debug info if needed
    debug(flags.debug, cli);


})();