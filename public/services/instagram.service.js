angular.module('galPhoto')
    .factory('instagram', function($resource) {
        return {
            fetchPopular: function(callback) {
                var api = $resource('https://api.instagram.com/v1/media/popular?cient_id=client_id&callback=JSON_CALLBACK', {
                    client_id: '9d0696c2288840fabad6b9b1bdf209a8'
                }, {
                    fetch: {
                        method: 'JSONP'
                    }
                });

                api.fetch(function(response) {
                    callback(response.data);
                });
            }
        }
    })
