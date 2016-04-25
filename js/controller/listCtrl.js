bair.controller('ListCtrl',  function($scope, $state, $stateParams, serverService, usSpinnerService){
	console.log('ListCtrl');
	console.log('params: ' + $stateParams.type);
	$scope.posts = [];
	init();
	function init(){
		usSpinnerService.spin('spinner-1');
		if($stateParams.type){
			serverService.getByType().then(function(res){
				console.log(res);
				if(res && res != "null"){
					$scope.posts = res;
				}else{
					alert("Таны хайсан төрлийн зар одоохондоо байхгүй байна.");
				}
			});
		}else{
			alert("Та хайж буй зарынхаа төрлийг сонгоно уу.");
		}
	}
	$scope.showDetail = function(){
		
	}
});