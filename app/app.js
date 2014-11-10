var app = angular.module('MayBelline', []);

app.factory('instagram', function($http){
	var tag = 'goextremeno';

	return {
		byHashtag: function(callback){
            var insUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK';

            $http.jsonp(insUrl).success(function(response){
                callback(response.data);
            });
		}
	};
});

app.controller('instagramCtrl', function ($scope, instagram){
	$scope.pics = [];

	instagram.byHashtag(function(data){
		$scope.pics = data;
	});
});