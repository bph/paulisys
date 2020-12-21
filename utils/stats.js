// const fetch = require('node-fetch');
const axios = require('axios');
const ora = require('ora');
const { green, yellow} = require('chalk');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const apiUrl = `https://api.github.com/users/bph`;
const spinner = ora( { text: '' } )

module.exports = async() => {
    spinner.start(`${yellow(`Followers`)} fetching...`);
    const [error,res] = await to(axios.get(apiUrl));
    handleError(`API call to GitHub failed`,error, false,false);
    
    const ghFollowers = res.data.followers;
    spinner.succeed(`${green(`Followers`)} fetched. `);

    console.log(`
   GitHub followers: ${ghFollowers}
           `);
 }

