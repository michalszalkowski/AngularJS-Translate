var app = angular.module('transTest', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {

	translate.forEach(function (item) {
		var key = Object.keys(item).toString();
		var arr = item[key];
		$translateProvider.translations(key, arr);
	});

//	$translateProvider.translations('en', {
//		'TITLE': 'Hello',
//		'FOO': 'This is a paragraph'
//	});

	$translateProvider.preferredLanguage('en');
}]);

app.controller('LanguageSwitcherCtrl', function ($scope, $translate) {
	$scope.changeLanguage = function (key) {
		$translate.use(key);
	};
});

app.controller('TestCtrl', function ($scope) {
	$scope.title = 'TITLE';
	$scope.foo = 'FOO';
});