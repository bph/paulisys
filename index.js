#!/usr/bin/env node
const chalk = require('chalk');
const alert = require('pauli-alerts');
const init = require('./utils/init');
const handleError = require('node-cli-handle-error');
const log = console.log; 

const args = process.argv.slice(2);

 // Alerts
 const success = chalk.green.inverse;
 const info = chalk.blue.inverse;
 const warning = chalk.keyword(`orange`).inverse;
 const error = chalk.red.bold.inverse;

 const socialinfo = `
    Twitter: https://twitter.com/paulisystems
    Website: https://paulisystems.net
    Email:   support@paulisystems.net
`;
const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialinfo: ``;

(async() => {
    /* called an IIFE = Immediately Invoked Function Expression
    https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    */
    init();
    // process.exit();

    log(`

    ${chalk.dim(`Services: DevOps, SysOps, Web devs, Data Integration, APIs.
    Founded: 2002
    Founder: Birgit Pauli-Haack
    `)}
    ${social}
    `);
    

    log(`
    ${success(` Success: `)} Thank for checking out the cli
    ${info(` Info: `)}    Ahmad Awais is createing a course on NodeCLI.com
    ${warning(` Warning: `)} Please don't copy me. Be yourself.
    ${error(` Error :`)}   I am on vacation. Contact me next week. 
    `);
    
    alert({ type: "info", msg: "Gutenberg Nightly - zip from master now available on Gutenberg Times",name: `Updated! `});
    alert({type: "info", msg: args, name: `Arguments` });

    //const err = new Error('Blog API');
    //handleError(`Blog API is down`, err, false, false);

   

})();