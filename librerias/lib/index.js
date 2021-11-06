"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParameters = void 0;
var validateParameters = function (schema) {
    return function (req, res, next) {
        var parameters = res.locals;
        var result = schema.validate(parameters);
        if (result.hasOwnProperty('error')) {
            var messagesError = result.error.details.map(function (item) {
                return item.message.replace(/\"/g, "'");
            });
            res.status(411).send(messagesError);
        }
        else {
            next();
        }
    };
};
exports.validateParameters = validateParameters;
