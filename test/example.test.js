const assert = require('assert');
const urlFinder = require('../features/urlFinder');

describe('Findind server test ', () => {
 it('Testing for Online Server http://localhost:8089/', () => {
        const result = urlFinder.findServer([ {
            "url": "http://localhost:8089/",
            "priority": 1
        }]).then((result) => {
            assert.equal(1, result.length);
            })
    });

    it('Testing for offline Server http://localhost:30799/', () => {
        const result = urlFinder.findServer([ {
            "url": "http://localhost:30799/",
            "priority": 1
        }]).then((result) => {
            assert.equal(0, result.length);
            }).catch((error) => {
                assert.equal(1, 0);
        });
    });

});


