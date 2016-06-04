'use strict';

angular.module('myApp.view1', ['ngRoute','luegg.directives'])

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

        var currentId = $scope.messages[$scope.messages.length-1]._id;
        $http.get("http://localhost:3001/messages/delta/"+currentId)
                    .then(function(res){
                    if($scope.filterText == "" && res.data.length > 0){

                        var json = {"_id":res.data[0]._id,
                                    "email":res.data[0].email,
                                    "msg":res.data[0].msg,
                                    "img":res.data[0].img,
                                    "__v":res.data[0].__v
                                    }

                        $scope.messages.push(json);
                    }
                        console.log("success")

                    } , function(res){
                        console.log("failure")
                        });

    } , 1000);

    $scope.submit = function () {

    var msg = {"email": $scope.form.email , "msg" : $scope.from.message }

    $http.post("http://localhost:3001/messages" , msg)
        .then(function(res){
         $scope.messages.push(res.data);
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