var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) 
    { 
    $routeProvider
    .when('/products', 
        {
        templateUrl: 'pages/products.html',
        controller: 'productController'
        })
    
    .when('/brands', 
        {
        templateUrl: 'pages/brands.html',
        controller: 'brandController'
        }) 
    });

myApp.controller('productController', ['$scope', '$http', function ($scope, $http) 
    {
    $http.get('http://api.shopstyle.com/api/v2/products?pid=uid8225-32718865-93')
    .success(function(result)
             {
        console.log("You are so smart");
        $scope.productColor = [];
        $("#sub1").click(function() {


    })
    });
    .error(function(data, status)
          {
        console.log("You failed, but you are still smart.")
    });
    }]);

myApp.controller('brandController', ['$scope', '$http', function ($scope, $http) 
    {
    $http.get('http://api.shopstyle.com/api/v2/brands?pid=uid8225-32718865-93')
    .success(function(result)
             {
        $scope.test = result.brands[i].name;
        console.log("You are so very smart");
    })
    .error(function(data, status)
          {
        console.log("You failed, but you are still smart.");
    });
    }]);
