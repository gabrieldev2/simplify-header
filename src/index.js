const libs = {
    header: require('./utils/header'),
    request: require('request'),
    header: require("./utils").setHeader
};

async function example() {
    const headers = libs.header(`key1: value1
    key2: value2
    key3: value3`);

    const options = {
        url: 'http://ip.jsontest.com/',
        headers,
        method: "GET",
        json: true
    };

    libs.request(options, (err, res, body) => {
        /* see the headers */
        console.log(res.req['_header']);
    });
};

example();