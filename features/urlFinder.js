
const axios = require('axios');
const utils = require('../foundation/utils');

//Function determines the available urls
async function findServer(urlObj, successUrl) {
    console.log("222222222222");
    await Promise.allSettled(urlObj.map(req => {
        return axios.get(req.url, { timeout: 5000 })
            .then((response) => {
                let status = response.status;
                if (status >= 200 && status <= 299) {
                    successUrl.push(req);
                    console.log("5555555555");
                }
            })
            .catch((error) => {
                console.log(error);
                console.log("44444444444444");
            })
    }));

    return new Promise(function (resolve, reject) {
        if (successUrl.length > 0) {
            console.log("I am here")
            resolve(successUrl.sort(utils.compare)[0])
        }
        else {
            console.log("I am there")
            reject("All servers are offline")
        }
    })
}



exports.findServer = findServer;