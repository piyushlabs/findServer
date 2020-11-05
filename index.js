const fs = require('fs');
const urlList = require('./input.json');

const axios = require('axios');

const successUrl = [];

//Extenal function used for sorting 
function compare( a, b ) {
    if ( a.priority < b.priority ){
      return -1;
    }
    if ( a.priority > b.priority ){
      return 1;
    }
    return 0;
}
  
//Function determines the available urls
async function findServer(urlObj){
    console.log("222222222222");
    await Promise.allSettled(urlObj.map(req =>{
        return axios.get(req.url,{timeout: 5000})
        .then((response) => {
            let status = response.status;
            if(status>=200 && status<=299){
                successUrl.push(req);
                console.log("5555555555");
            }
        })
        .catch((error) => {
            console.log(error); 
            console.log("44444444444444");
        })
    }));

    return new Promise(function(resolve,reject){
        if(successUrl.length>0){
            console.log("I am here")
            resolve(successUrl.sort(compare)[0])
        }
        else{
            console.log("I am there")
            reject("All servers are offline")
        }
    })
}

console.log("111111111111");
findServer(urlList).then( (result) => {
    if(successUrl.length>0){
        console.log(result);
        console.log("666666666");
        }
    else{
        console.log("All serves are offline");
        }
    }
)
.catch((error) => { 
    console.log(error);
})

console.log("33333333333333");