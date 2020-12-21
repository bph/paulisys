// const fetch = require('node-fetch');
const axios = require('axios');
const handleError = require('cli-handle-error');
const apiUrl = `https://api.github.com/users/bph`;

module.exports = async() => {
    /*
    const res = await fetch(apiUrl);
    const data = await res.json();
    //console.log('data: ', data);
    */
   try {
        const res = await axios.get(apiUrl);
        const ghFollowers = res.data.followers;
        console.log(`
GitHub followers: ${ghFollowers}
            `);
   } catch(error) { 
       handleError(`API call to GitHub failed`,error, false,false);
   }
    // console.log('res: ', res);
   
 }

