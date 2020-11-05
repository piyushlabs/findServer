const fs = require('fs');
const urlList = require('./input.json');

const urlFinder = require('./features/urlFinder');

const successUrl = []; //list of online servers


urlFinder.findServer(urlList, successUrl).then((result) => {
    console.log(`Most Available server is: ${result.url}, with priority: ${result.priority}`);
    }).catch((error) => {
        console.log(error);
});