"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_errors_1 = require("restify-errors");
const data_1 = require("./data");
function getSingle(req, res, next) {
    const id = parseInt(req.params.id);
    if (id) {
        const customer = data_1.customers.find(c => c.id === id);
        if (customer) {
            res.send(customer);
            next();
        }
        else {
            next(new restify_errors_1.NotFoundError());
        }
    }
    else {
        next(new restify_errors_1.BadRequestError('Parameter id must be a number'));
    }
}
exports.getSingle = getSingle;
