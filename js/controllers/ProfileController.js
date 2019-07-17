app.controller('ProfileController', ['$scope','$http','ProfileService' ,function ($scope, $http, ProfileService) {
    ProfileService.index().success(function(data) {
        $scope.id = data[0].id;
        $scope.name = data[0].name;
        $scope.username = data[0].username;
        $scope.phone = data[0].phone;
        $scope.email = data[0].email;
        $scope.about = data[0].about;
    });
    
    $scope.postdata = function (id,name, username, email,phone,about) {
        var data = {
            id : id,
            name : name, 
            username : username, 
            email : email, 
            phone : phone, 
            about : about, 
        };
        //Call the services
        $http.put('http://127.0.0.1:8000/api/v1/profile/'+$scope.id+'/update', JSON.stringify(data)).then(function (response) {
            if (response.data)
            $scope.msg = "Update Profile Submitted Successfully!";
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
}]);
app.service('ProfileService', ['$http',function($http) {
    this.index=function(){
        return $http.get("http://127.0.0.1:8000/api/v1/profile/4");
    }
}]);
