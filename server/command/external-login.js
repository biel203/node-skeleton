class ExternalLogin {
    constructor () {

    }

    login (req, res) {
        var config = require('../config.json');
        var cloudrail = require("cloudrail-si");
        var username = req.body.username;
        var password = req.body.password;

        cloudrail.Settings.setKey(config.cloudrailKey);

        function redirectReceiver(url, currentState, callback) {
            res.redirect(url)
        }

        function onLogin(a, b, c) {
            console.log(a)
        }

        var redirectUri = config.host + "/api/receive-auth/";
        var service = new cloudrail.services.LinkedIn(
            redirectReceiver,
            config.linkedInApp.clientIdentifier,
            config.linkedInApp.clientSecret,
            redirectUri,
            "state"
        );

        service.login(onLogin)

    }

    auth (req, res) {
        console.log(req)
    }

}

module.exports = ExternalLogin;
