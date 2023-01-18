const Router = require('./../framework/Router'); 


const router = new Router();

const users = [
    {id: 1, name: 'Alex'},
    {id:2, name: 'Bogdan'}
];

router.get("/users", (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    res.end(JSON.stringify(users));
});

router.get("/posts", (req, res) =>{
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    res.end("This is POSTS");
});


module.exports = router;