module.exports = (req, res) => {
    res.send = (data) => {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        // console.log(`data=${data}`);
        res.send = (data) => {
            res.end(JSON.stringify(data));
        }
    };
};