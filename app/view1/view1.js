'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope' , '$http' , '$interval' ,function($scope ,$http , $interval) {

    $scope.form = {};
    $scope.form.email = "";
    $scope.form.message = "";
    $scope.filterText = "";

    $http.get("http://localhost:3001/messages")
        .then(function(res){
            $scope.messages = res.data;
            console.log("success")

        } , function(res){
            console.log("failure")
        });

    $interval(function(){

        $http.get("http://localhost:3001/messages/"+$scope.messages.length)
                    .then(function(res){
                    if($scope.filterText == ""){
                        $scope.messages = res.data;
                    }
                        console.log("success")

                    } , function(res){
                        console.log("failure")
                        });

    } , 1000000000);

    $scope.submit = function () {

    var msg = {"email": $scope.form.email , "msg" : $scope.from.message }

    $http.post("http://localhost:3001/messages" , msg)
        .then(function(res){
            console.log("success");

        } , function(res){
            console.log("failure");
        })

    }


    $scope.filter = function(){

        $http.get("http://localhost:3001/messages/filter/"+$scope.filterText )
            .then(function(res){
                $scope.messages = res.data;
                    console.log("success");

                } , function(res){
                        console.log("failure");
                })


    }

}]);