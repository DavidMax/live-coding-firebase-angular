'use strict';
(function(){
var meetupBaseApp = angular.module('meetupBaseApp', ['firebase']);

meetupBaseApp.controller('MeetupBaseCtrl', ['$scope', '$firebase',
	function($scope, $firebase){

		var fbRef = new Firebase('https://<YOUR-FIREBASE-NAME>.firebaseio.com/');
		$scope.questionsArray = $firebase(fbRef).$asArray();

		$scope.addQuestion = function(e) {
			if (e.keyCode === 13) {
				$scope.questionsArray.$add({
					user: $scope.name,
					question: $scope.body,
					time: Firebase.ServerValue.TIMESTAMP
				});
				$scope.body = '';
			}
		}
	}
]);
})();