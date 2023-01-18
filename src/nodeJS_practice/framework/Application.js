const http = require('http');
const EventEmitter = require('events');
// const path = require('path');

// endpoint = {
    //     '/users':{
    //         'GET': handler
    //     }
    // }

module.exports = class Application{
    constructor(){
        this.emitter = new EventEmitter();
        this.server = this._createServer();

    };

    listen(port, callback){
        this.server.listen(port, callback);
    };

    addRouter(router){
        Object.keys(router.endpoints).forEach(path =>{
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => { 
                    const handler = endpoint[method];
                    handler(req, res);
                });                
            });
        });
    };

    _createServer(){
        return http.createServer((req, res) =>{
            const is_emmited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
            if (!is_emmited){
                res.end();
            };
        });
    };

    _getRouteMask(path, method){
        return `[${path}]:[${method}]`;
    };
};