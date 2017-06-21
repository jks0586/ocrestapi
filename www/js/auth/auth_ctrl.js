angular.module('starter.controllers')

.controller('IniscreenCtrl', function($scope,$rootScope,$location,$timeout,$ionicScrollDelegate,$ionicSideMenuDelegate,$ionicHistory$ionicPopover,$localStorage) {
	'use strict';

	$ionicSideMenuDelegate.canDragContent(false); // hide sidemenu

	$rootScope.isC2CUser = true;


	//-- scroll to top ---

	$scope.scrolltotop = function(){
		 $timeout(function () {
					$ionicScrollDelegate.scrollBottom(true);
			   }, 400);

	}
});
