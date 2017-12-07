"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const restify_errors_1 = require("restify-errors");
const data_1 = require("./data");
function deleteSingle(req, res, next) {
    const id = parseInt(req.params.id);
    if (id) {
        const customerIndex = data_1.customers.findIndex(c => c.id === id);
        if (customerIndex !== (-1)) {
            data_1.customers.splice(customerIndex, 1);
            res.send(http_status_codes_1.NO_CONTENT);
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
exports.deleteSingle = deleteSingle;
