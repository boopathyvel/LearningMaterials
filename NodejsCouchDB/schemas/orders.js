var Joi = require('joi');

module.exports = Joi.object().keys({  
    user:Joi.string().required(),
    orderId:Joi.string().required(),
    orderFill:Joi.string(),
    tokenGet:Joi.string(),
    amountGet:Joi.string(),
    tokenGive:Joi.string(),
    amountGive:Joi.string(),
    singleTokenValue:Joi.string(),
    expires:Joi.string(),
    nonce:Joi.string(),
    orderType:Joi.string()
});