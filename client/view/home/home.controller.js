'use strict';

app.controller('home.controller', function ($scope, $rootScope) {

    // MÉTODOS

    $scope.onLoginLinkedIn = function () {
        function onRequest(url) {
            window.open(url)
        }

        function onError(err) {
            console.log(err)
        }

        var promise = $.get('/api/external-login/');
        promise.then(onRequest.bind(this), onError);


    }
});
