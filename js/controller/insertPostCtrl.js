bair.controller('insertPostCtrl', function($scope, serverService, $state){
	console.log('insertPostCtrl');

	$scope.images = null;
	$scope.post = null;

	$scope.back_clicked = function(){
		window.history.back();
	}

	$scope.insert_clicked = function(post){
		post.date = new Date();
		console.log(post);
		serverService.insertPost(post).then(function(res){
			if(res === "YES"){
				$state.go("main");
			}else{
				alert('Алдаа! Таны зар амжилттай орж чадсангүй.');
			}
		})
	};
});