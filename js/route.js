app.config(function($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl : 'pages/main.html',
        controller : 'MainController'
    })
    .when('/profile',{
        templateUrl : 'pages/profile.html',
        controller : 'ProfileController'
    })
    .when('/properties',{
        templateUrl : 'pages/properties-list.html',
        controller : 'PropertiesController'
    })

    .when('/property/:id',{
        templateUrl : 'pages/properties-detail.html',
        controller : 'DetailPropertyController'
    })
    .when('/propertiesbycategory/:id',{
        templateUrl : 'pages/propertiesbycategory-list.html',
        controller : 'PropertyByCategoryController'
    })
    .when('/news',{
        templateUrl : 'pages/news-list.html',
        controller : 'NewsController'
    })
    .when('/register',{
        templateUrl : 'pages/register.html',
        controller : 'RegisterController'
    })
});