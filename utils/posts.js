const ora = require('ora');
const axios = require('axios');
const to    = require('await-to-js').default;
const handleError = require('cli-handle-error');
const stripHTML = require('cli-strip-html');
const {dim} = require('chalk');

const apiURL = 'https://gutenbergtimes.com/wp-json/wp/v2/posts/';
const spinner = ora( { text: '' } )

module.exports = async() => {
    spinner.start(dim(`Getting the news`));
    const [err, res] = await to(axios.get(apiURL));
    handleError(`Gutenberg Times is not available`,err, false,false);

    const posts = res.data.map(post => {
        return {title: stripHTML(post.title.rendered), link: post.link}
    })
    spinner.stop();
    posts.map(({title, link}, index) =>{
        console.log(`${dim(`#${++index}`)} ${title}`);
        console.log(dim(link));
        console.log();
    })
};