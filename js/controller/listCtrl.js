bair.controller('ListCtrl',  function($scope, $state, $stateParams, serverService){
	console.log('ListCtrl');
	console.log('params: ' + $stateParams.type);
	$scope.posts = [];
	init();
	function init(){
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
});