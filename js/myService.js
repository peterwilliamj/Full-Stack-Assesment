/**
 * Created by peterwilliamjohnson on 10/18/14.
 */
var app = angular.module("FullStax");

app.service("mainService", function($http) {
    this.getFriends = function() {
       return $http({
           method: "GET",
           url: "http://localhost:3000/friends"
       });
    };
    this.addFriends = function(newFriend) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/friends/new",
            data: {
                name: newFriend.name,
                age: newFriend.age,
                met: newFriend.met
            }
        });
    };
    this.getFamily = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/family"
        });
    };
    this.getActivities = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/activities"
        });
    };
    this.getMe = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/me"
        });
    };
});