var myApp = angular.module('myApp', [])
myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
    $http.get('http://api.shopstyle.com/api/v2/products?pid=uid8225-32718865-93')
    .success(function(result)
             {
        $scope.planning=result;
        console.log("You are so smart");
        $scope.names = []
                    for(var i = 0; i < result.products.length; i++)
                {
        $scope.names.push(result.products[i][16]);
                    
                }
    })
    .error(function(data, status)
          {
        console.log("You failed, but you are still smart.")
    });
    $(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });

$(window).load(function(){
$('#myModal').modal('show');
});
var ngDemo = angular.module('ngDemo', ['ngRoute']);


ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/products', 
              {
              templateUrl : 'pages/products.html',
              controller  : ''
              })
        .when('/data', 
              {
              templateUrl : 'pages/data.html',
              controller  : ''
              });
	});


}]);