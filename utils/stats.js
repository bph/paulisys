const fetch = require('node-fetch');
const apiUrl = `https://api.github.com/users/bph`;

module.exports = async() => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    //console.log('data: ', data);

    const ghFollowers = data.followers;
    console.log(`
GitHub followers: ${ghFollowers}
        `);
 }