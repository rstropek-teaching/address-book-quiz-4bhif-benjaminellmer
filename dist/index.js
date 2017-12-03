"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = require("restify");
const delete_single_1 = require("./delete-single");
const get_all_1 = require("./get-all");
const get_single_1 = require("./get-single");
const post_1 = require("./post");
var server = restify_1.createServer();
// Add bodyParser plugin for parsing JSON in request body
server.use(restify_1.plugins.bodyParser());
// Add routes
server.get('/api/customers', get_all_1.getAll);
server.post('/api/customers', post_1.post);
server.get('/api/customers/:id', get_single_1.getSingle);
server.del('/api/customers/:id', delete_single_1.deleteSingle);
server.listen(8010, () => console.log('API is listening'));
