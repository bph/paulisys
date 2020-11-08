#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome ({
    title: pkgJSON.name,
    tagLine: `NodeJS SysOps`,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
});

console.log(`
Pauli Systems, LC
Services: DevOps, SysOps, Web devs, Data Integration, APIs.
Founded: 2002
Founder: Birgit Pauli-Haack

Twitter: https://twitter.com/paulisystems
Website: https://paulisystems.net
Email: support@paulisystems.net

`)