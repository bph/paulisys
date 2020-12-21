// const fetch = require('node-fetch');
const axios = require('axios');
const apiUrl = `xhttps://api.github.com/users/bph`;

module.exports = async() => {
    /*
    const res = await fetch(apiUrl);
    const data = await res.json();
    //console.log('data: ', data);
    */

    const res = await axios.get(apiUrl);

    
    // console.log('res: ', res);
    const ghFollowers = res.data.followers;
    console.log(`
GitHub followers: ${ghFollowers}
`);
 }

