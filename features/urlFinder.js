
const axios = require('axios');
const utils = require('../foundation/utils');

//find the number of online urls 
async function findServer(urlObj, successUrl) {
    await Promise.allSettled(urlObj.map(req => {
        return axios.get(req.url, { timeout: 5000 })
            .then((response) => {
                let status = response.status;
                if (status >= 200 && status <= 299) {
                    successUrl.push(req); //push the online url to list
                }
            })
            .catch((error) => {
            })
    }));

    return new Promise(function (resolve, reject) {
        if (successUrl.length > 0) {
            resolve(successUrl.sort(utils.compare)[0])  //resolve the sorted online url
        }
        else {
            reject("All servers are offline")  //reject since all servers are offline
        }
    })
}



exports.findServer = findServer;