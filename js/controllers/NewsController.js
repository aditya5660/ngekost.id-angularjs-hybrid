app.controller('NewsController',['$scope' ,'NewsService',function($scope ,NewsService,$location) {
    NewsService.index().success(function(data) {
        $scope.articles = data.articles;
        // console.log(data);
    });

}])

app.service('NewsService', ['$http',function($http) {
    this.index=function(){
        return $http.get('https://newsapi.org/v2/top-headlines?' +'country=id&' + 'apiKey=1f922f30f39a487d90194ebf64f63ac9');
    }
  }]);



