var Joi = require('joi');

module.exports = Joi.object().keys({  
    orderId:Joi.string(),
    orderFill:Joi.string(),
    tokenGet:Joi.string(),
    amountGet:Joi.string(),
    tokenGive:Joi.string(),
    amountGive:Joi.string(),
    expires:Joi.string(),
    nonce:Joi.string(),
    user:Joi.string(),
    orderType:Joi.string()
});