const setHeader = (h) => {
    const obj = {};
    h.split('\n')
    .forEach((item, i) => {
        const [ key, value ] = item.split(':');
        obj[`${key.trim()}`] = value.trim()
    });
    return obj;
};

module.exports = setHeader;