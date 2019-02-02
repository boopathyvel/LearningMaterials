var schemas = require('../../schemas/validator')
var tokenDetails = require('../couchdb').use('token_details');

exports.create = schemas.validating('tokens', createTokens);

function createTokens(token, cb) {  
  tokenDetails.insert(token, token.tokenName, cb);
};