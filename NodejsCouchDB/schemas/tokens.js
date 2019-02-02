var Joi = require('joi');

module.exports = Joi.object().keys({  
  tokenAddress: Joi.string().required(),
  tokenName: Joi.string().required(),
  decimals: Joi.string().regex(/[0-9]/),
  symbol: Joi.string(),
  abi: Joi.object()
});