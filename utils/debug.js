const alert = require('pauli-alerts');
const log   = console.log; 

module.exports = (isDebug, cli) => {
    if (!isDebug){
        return;
    }
    
    alert({ type: 'warning', msg: `Debugging Info`});
    log(`flags`, cli.flags);
    /* log(`input`, cli.input);
    log(`flags`, cli.flags);
    log(`cli`, cli); */
    log();
}