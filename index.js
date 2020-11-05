const fs = require('fs');
const urlList = require('./input.json');

const urlFinder = require('./features/urlFinder');

const successUrl = [];

console.log("111111111111");

urlFinder.findServer(urlList, successUrl).then((result) => {
    if (successUrl.length > 0) {
        console.log(result);
        console.log("666666666");
    }
    else {
        console.log("All serves are offline");
    }
}
)
    .catch((error) => {
        console.log(error);
    })

console.log("33333333333333");