app.controller('PropertyByCategoryController',['$scope','$routeParams' ,'PropertyByCategory',function($scope ,$routeParams,PropertyByCategory) {
    PropertyByCategory.index($routeParams.id).success(function(data){
		$scope.properties = data;
	});
}])
app.service('PropertyByCategory',['$http',function($http) {
    this.index=function(id) {
        return $http.get("http://127.0.0.1:8000/api/v1/propertiesbycategory/"+ id )
    }
}])