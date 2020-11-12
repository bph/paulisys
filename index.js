#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log; 

welcome ({
    title: `Pauli Systems`,
    tagLine: `NodeJS SysOps`,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
});

log(`

${chalk.dim(`Services: DevOps, SysOps, Web devs, Data Integration, APIs.
Founded: 2002
Founder: Birgit Pauli-Haack
`)}

${chalk.blueBright(`Twitter`)}: https://twitter.com/paulisystems
Website: https://paulisystems.net
Email:   support@paulisystems.net

`)