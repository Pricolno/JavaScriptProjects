const Router = require('./../framework/Router'); 
const controler = require('./user-controler');

const router = new Router();


router.get("/users", controler.getUsers);
router.post("/users", controler.createUser); 


module.exports = router;