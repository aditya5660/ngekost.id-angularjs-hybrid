app.controller('DetailPropertyController',['$scope','$routeParams' ,'DetailService',function($scope ,$routeParams,DetailService) {
    DetailService.index($routeParams.id).success(function(data){
		$scope.detail = data[0];
	});
}])
app.service('DetailService',['$http',function($http) {
    this.index=function(id) {
        return $http.get("http://127.0.0.1:8000/api/v1/property/"+ id +"/detail")
    }
}])