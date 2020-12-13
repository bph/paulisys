const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = (minimal, clear) => {
   
    unhandled();
 
    !minimal &&
        welcome ({
        title: `Pauli Systems`,
        tagLine: `NodeJS SysOps`,
        version: pkgJSON.version,
        description: pkgJSON.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear,
    });
    minimal && console.log('Birgit Pauli-Haack');
    checkNode('10');
};

