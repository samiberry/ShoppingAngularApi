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
        $scope.names = [];
                    for(var i = 0; i < result.products.length; i++)
                {
        $scope.names.push(result.products[i].name);
                    
                }
    })
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
        $scope.test = result.brands[0].name;
        console.log("You are so very smart");
    })
    .error(function(data, status)
          {
        console.log("You failed, but you are still smart.");
    });
    }]);