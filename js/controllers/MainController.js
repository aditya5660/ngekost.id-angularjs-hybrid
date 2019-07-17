app.controller('MainController',['$scope','CategoryService','PropertyService',function($scope,CategoryService,PropertyService) {
    CategoryService.index().success(function(data) {
        $scope.categories = data;
        // console.log(data);
    });
    PropertyService.index().success(function(data) {
        $scope.properties = data;
        // console.log(data);
    });
}]);

app.service('CategoryService', ['$http',function($http) {
    this.index=function(){
        return $http.get("http://127.0.0.1:8000/api/v1/category");
    }
  }]);
app.service('PropertyService', ['$http',function($http) {
    this.index=function(){
        return $http.get("http://127.0.0.1:8000/api/v1/recentproperty");
    }
  }]);
app.directive('wrapOwlcarousel', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
});

