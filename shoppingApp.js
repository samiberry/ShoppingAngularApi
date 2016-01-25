var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) 
    { 
    $routeProvider
    .when('/',
        {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
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
myApp.controller('homeController', [function ()
    {
    }]);

myApp.controller('productController', ['$scope', '$http', function ($scope, $http) 
    {
    $scope.productColor = "";
    $scope.products = [];
    $("#sub1").click(function () {
        $scope.products = [];
        console.log($scope.productColor);
        $http.get('http://api.shopstyle.com/api/v2/products?pid=uid8225-32718865-93')
            .success(function(result) {
                angular.forEach(result.products , function(value, key) {
                    console.log(key);
                    angular.forEach(value.stock , function(value2, key2) {
                        console.log(value2.color.name);
                        if(value2.color.name == $scope.productColor){
                            if($scope.products.indexOf(value.name) == -1) {
                                $scope.products.push(value.name);
                            }
                        }
                    });
                });
                console.log("You are so smart");
            })
            .error(function(data, status) {
                console.log("You failed, but you are still smart.");
            });
        });
    }]);

myApp.controller('brandController', ['$scope', '$http', function ($scope, $http) 
    {
    $http.get('http://api.shopstyle.com/api/v2/brands?pid=uid8225-32718865-93')
    .success(function(result)
             {
             $scope.results = result;
            console.log("You are so very smart");
    })
    .error(function(data, status)
          {
        console.log("You failed, but you are still smart.");
        });
    }]);
