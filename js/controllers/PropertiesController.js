app.controller('PropertiesController',['$scope' ,'PropertyService',function($scope ,PropertyService) {
    PropertyService.index().success(function(data) {
        $scope.properties = data;
        // console.log(data);
    });

}])

app.service('PropertyService', ['$http',function($http) {
    this.index=function(){
        return $http.get("http://127.0.0.1:8000/api/v1/recentproperty");
    }
}]);



