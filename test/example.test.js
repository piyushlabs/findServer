const assert = require('assert');
const utils = require('../foundation/utils');
const urlFinder = require('../features/urlFinder');


const unSortArray = [
    {
        "url": "http://kratikal.com",
        "priority": 7
    },
    {
        "url": "http://offline.kratikal.com",
        "priority": 2
    },
    {
        "url": "http://google.com",
        "priority": 4
    }
]

const lowertPriority = 2;


describe('Findind server test ', () => {
    it('Testing for Online Server http://localhost:8089/', () => {
        const result = urlFinder.findServer([{
            "url": "http://localhost:8089/",
            "priority": 1
        }]).then((result) => {
            assert.equal(1, result.length);
        })
    });

    it('Testing for offline Server http://localhost:30799/', () => {
        const result = urlFinder.findServer([{
            "url": "http://localhost:30799/",
            "priority": 1
        }]).then((result) => {
            assert.equal(0, result.length);
        }).catch((error) => {
            assert.equal(1, 0);
        });
    });

});


describe('Sorting of priority array ', () => {
    it('Tested given priorty array', () => {
        const result = unSortArray.sort(utils.compare)
            assert.equal(lowertPriority, result[0].priority);
    });

});


