bair.factory('serverService',  function($q, $http){

	var getByType = function(){
		var deferred = $q.defer();
		$http.get('http://smartmongol.com/bairApp/php/getByType.php').success(function(res){
			deferred.resolve(res);
		}).error(function(err){
			console.log(err);
			deferred.reject();
		});
		return deferred.promise;
	};

	var insertPost = function(post){
		var deferred = $q.defer();
		$http.post('http://smartmongol.com/bairApp/php/insertPost.php', post).success(function(res){
			deferred.resolve(res);
		}).error(function(err){
			console.log(err);
			deferred.reject();
		});
		return deferred.promise;
	};

	return {
		getByType: getByType,
		insertPost: insertPost
	};
})