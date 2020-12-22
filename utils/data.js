const chalk = require('chalk');

 // Alerts
 const success = chalk.green.inverse;
 const info = chalk.blue.inverse;
 const warning = chalk.keyword(`orange`).inverse;
 const error = chalk.red.bold.inverse;

 const social = `
 Twitter: https://twitter.com/paulisystems
 Website: https://paulisystems.net
 Email:   support@paulisystems.net
`;

const services = `Services: DevOps, SysOps, Web devs, Data Integration, APIs.
Founded: 2002
Founder: Birgit Pauli-Haack\n`;

const bio = `Birgit Pauli-Haack is the publisher of Gutenberg Times, a site with news around WordPress block editor and beyond. Birgit hosts regular Gutenberg Live Q & A on YouTube and co-hosts the podcast Gutenberg Changelog with Mark Uraine.
`;

const ad = `Gutenberg Nightly - zip from master now available on Gutenberg Times`

const blog = `Gutenberg Times lastest articles`

module.exports = {
    services,
    bio,
    social,
    ad,
    blog,
};
