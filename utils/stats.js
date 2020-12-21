// const fetch = require('node-fetch');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;
const apiUrl = `https://api.github.com/users/bph`;

module.exports = async() => {
   
    const [error,res] = await to(axios.get(apiUrl));
    handleError(`API call to GitHub failed`,error, false,false);
    
    const ghFollowers = res.data.followers;
    console.log(`
   GitHub followers: ${ghFollowers}
           `);


  /* try {
        const res = await axios.get(apiUrl);
        const ghFollowers = res.data.followers;
        console.log(`
GitHub followers: ${ghFollowers}
            `);
   } catch(error) { 
       handleError(`API call to GitHub failed`,error, false,false);
   }
    // console.log('res: ', res);
   */

    /*
    const res = await fetch(apiUrl);
    const data = await res.json();
    //console.log('data: ', data);
    */
 }

