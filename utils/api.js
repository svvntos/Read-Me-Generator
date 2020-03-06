const axios = require("axios")
const api = {
    getUser(username){
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl)
        .then(response => {
            const data = response.data;
        })
        .catch(err => {
            if (err) throw Error;
        })
    }
};

module.exports = api;