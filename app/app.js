angular.module('trivia', ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    
        $stateProvider.state("home",{
            url:"/",
            // template: "Home State",
            templateUrl: 'app/trivia/trivia.html',
            controller: 'triviaCtrl'
        })

})