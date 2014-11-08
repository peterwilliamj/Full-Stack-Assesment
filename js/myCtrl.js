/**
 * Created by peterwilliamjohnson on 10/18/14.
 */
var app = angular.module("FullStax");

app.controller("MainController", function($scope, mainService) {
    $scope.getFriends = function(){
        mainService.getFriends().then(function(data) {
            $scope.friends = data.data;
        })
    };
    $scope.getFamily = function(){
        mainService.getFamily().then(function(data) {
            $scope.family = data.data;
        })
    };
    $scope.getActivities = function(){
        mainService.getActivities().then(function(data){
            $scope.activities = data.data;
        })

    };
    $scope.getMe = function(){
        mainService.getMe().then(function(data){
            $scope.me = data.data
        })
    };


    $scope.addFriends = function() {
        mainService.addFriends($scope.newFriend);

    mainService.getFriends().then(function(data){
        $scope.friends = data.data;
        console.log($scope.friends);
    });
        $scope.newFriend.name = "";
        $scope.newFriend.age = "";
        $scope.newFriend.met = "";

    }


});
