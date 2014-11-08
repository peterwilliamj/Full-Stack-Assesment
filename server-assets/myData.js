/**
 * Created by peterwilliamjohnson on 10/18/14.
 */
var friends = [
    {
        name: "Chris",
        age: 22,
        met: "2010"
    },
    {
        name: "Austin",
        age: 22,
        met: "2004"
    },
    {
        name: "Tyler",
        age: 22,
        met: "2010"
    }
];
module.exports.getFriends = function() {
    return friends;
};

module.exports.addFriend = function(newFriend){
    friends.push(newFriend);
};
var family = [
    {
        name: "Bill",
        age: 52,
        relation: "dad"
    },
    {
        name: "Kelly",
        age: 50,
        relation: "mom"
    },
    {
        name: "Lauren",
        age: 26,
        relation: "sister"
    }
];
module.exports.getFamily = function(){
    return family;
};
module.exports.addFamilyMember = function(newFamilyMember){
    family.push(newFamilyMember);
};

var activities = [
    {
        name: "Skiing"
    },
    {
        name: "programming"
    }
];
module.exports.getActivities = function(){
    return activities;
};
module.exports.addActivity = function(newActivity){
    activities.push(newActivity);
};

var me = [
    {
        name: "Peter",
        height: "5ft10in",
        favMovie: "Breaking Away",
        favArtist: "none",
        favFood: "Sushi"
    }
];
module.exports.getMe = function(){
    return me;
};
module.exports.addMe = function(newMe){
    activities.push(newMe);
};