angular.module('Heroes')
    .controller('homeController', homeController);

homeController.$inject = ['heroesFactory'];

function homeController (heroesFactory){
    var home = this;
    home.newHero = {};
    home.hero = {};
    home.heroList = [];

    home.greeting = 'Welcome to the Heroes of AJAX!'

    // heroesFacory.createHero({}).then

    home.createHero = function() {
      heroesFactory.createHero(home.newHero)
        .then(function(returnData){
           console.log('Response from server : ', returnData)
           home.newHero = {};
           home.getHero();
        });
    }

    home.getHero = function(heroID){
      heroesFactory.getHero(heroID)
        .then(function(returnData){
          if(returnData.data.length){
            home.heroList = returnData.data;
          }
          else {
            home.hero = returnData.data;
          }
        })
    }
    home.getHero();
}
