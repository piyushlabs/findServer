const fs = require('fs');
const urlList = require('./input.json');

const axios = require('axios');

const successUrl = [];


function compare( a, b ) {
    if ( a.priority < b.priority ){
      return -1;
    }
    if ( a.priority > b.priority ){
      return 1;
    }
    return 0;
  }
  

async function findServer(urlObj){
    console.log("222222222222");
    await Promise.allSettled(urlObj.map(req =>{
        return axios.get(req.url,{timeout: 5000})
        .then((response) => {
            let status = response.status;
            if(status>=200 && status<=299){
                successUrl.push(req);
                console.log("5555555555");
                //console.log(req);
                //Promise.resolve(33);
            }
        })
        .catch((error) => {
            //console.log(error); 
            console.log("44444444444444");
            //Promise.reject("Error");
        })
    }));
}

console.log("111111111111");
findServer(urlList).then( () => {
    if(successUrl.length>0){
        console.log(successUrl.sort(compare).reverse()[0]);
        console.log("666666666");
        }
    }
)
console.log("33333333333333");