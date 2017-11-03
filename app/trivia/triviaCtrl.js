/* bring these into the controller. pass through the corresponding data. Example: */



angular.module('trivia')
    .controller('triviaCtrl', function ($scope, triviaSrvc) {
        $scope.getQuestions = function () {
            triviaSrvc.getTrivia().then(function (response) {
                $scope.questions = response
            })
        }
        
        $scope.addQuestion = function(newQuestion){
            triviaSrvc.addTrivia(newQuestion).then(function(response){
                $scope.newQuestion={}
                $scope.questions = response
            })
        }

    })





// <button ng-click='deleteTrivia(question.id)'></button>

