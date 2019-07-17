app.controller('RegisterController', function ($scope, $http) {
    $scope.name = null,
    $scope.username = null,
    $scope.email = null,
    $scope.phone = null,
    $scope.password = null,
    $scope.confirmpassword = null,
    $scope.postdata = function (name, username, email,phone,password,confirmpassword) {
        var data = {
            name : name, 
            username : username, 
            email : email, 
            phone : phone, 
            password : password, 
            confirmpassword : confirmpassword,
        };
        //Call the services
        $http.post('http://127.0.0.1:8000/api/v1/register', JSON.stringify(data)).then(function (response) {
            if (response.data)
            $scope.msg = "Post Data Submitted Successfully!";
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});