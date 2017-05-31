var express = require('express');
var router = express.Router();


var ExternalLogin = require('./command/external-login');


var externalLogin = new ExternalLogin();
router.post('/api/external-login/', externalLogin.login);

router.get('/api/receive-auth/', externalLogin.auth);

module.exports = router;
