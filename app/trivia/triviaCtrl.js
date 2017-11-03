/* bring these into the controller. pass through the corresponding data. Example: */



angular.module('trivia')
    .controller('triviaCtrl', function ($scope, triviaSrvc) {

        triviaSrvc.getQuestions().then( questions => {
            $scope.questions = questions
            console.log(questions)
        })
        
        $scope.addQuestion = function(newQuestion){
            triviaSrvc.addTrivia(newQuestion).then(function(response){
                $scope.newQuestion={}
                $scope.questions = response
            })
        }

    })





// <button ng-click='deleteTrivia(question.id)'></button>

