bair.controller('MainCtrl',  function($scope, $state){
	console.log('MainCtrl');
	$scope.types = ["Зарах", "Түрээслэх"];
	$scope.search_types = ["2 өрөө байр", "3 өрөө байр", "хотын төвд"]

	$scope.selected_type = "Зарах";
	$scope.searched_type = "";

	$scope.selectedSearchType = function(search_type){
		$scope.searched_type = search_type;
	};

	$scope.search_clicked = function(){
		console.log($scope.searched_type);
		$state.go("list", {type: $scope.searched_type});
	}

	$scope.newPost = function(){
		$state.go('insertPost');
	}
});