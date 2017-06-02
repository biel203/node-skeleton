class ExternalLogin {
    constructor () {

    }

    request (req, res) {
        var config = require('../config.json');
        var cloudrail = require("cloudrail-si");

        cloudrail.Settings.setKey(config.cloudrailKey);

        function redirectReceiver(url, currentState, callback) {
            res.send(url)
        }

        function onLogin(a, b, c) {
            console.log(a)
        }

        var redirectUri = config.host + "/api/receive-auth/";
        var service = new cloudrail.services.LinkedIn(
            //redirectReceiver,
            cloudrail.RedirectReceivers.getLocalAuthenticator(8080),
            config.linkedInApp.clientIdentifier,
            config.linkedInApp.clientSecret,
            redirectUri,
            "state"
        );

        service.login(onLogin)

    }

    auth (req, res) {
        res.send(true)
    }

}

module.exports = ExternalLogin;
