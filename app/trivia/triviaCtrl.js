/* bring these into the controller. pass through the corresponding data. Example: */



angular.module('trivia')
    .controller('triviaCtrl', function ($scope, triviaSrvc) {

        function addDifficulty(array) {
            array.map(function (el) {
              switch (el.difficulty) {
                case 1:
                  el.labelDifficulty = 'Easy';
                  break;
                case 2:
                  el.labelDifficulty = 'Medium';
                  break;
                case 3:
                  el.labelDifficulty = 'Hard';
                  break;
              }
            })
          }
        
          $scope.toggleSearch = function() {
            $scope.searchOpen = !$scope.searchOpen;
            $scope.search = {};
          }

          
        {
            $scope.getQuestions = function () {
                triviaSrvc.getQuestions().then(questions => {
                    $scope.questions = questions;
                    addDifficulty($scope.questions);
                    
                })
            }
            $scope.getQuestions()
        }

        $scope.addQuestion = function(question) {
            triviaSrvc.addQuestion(question).then(function(response) {
              $scope.newQuestion = {};
              $scope.questions = response;
              $scope.closeModal()
              $scope.getQuestions()
            })
          }
        
          $scope.updateQuestion = function (update) {
            triviaSrvc.editQuestion(update).then(function (response) {
              $scope.getQuestions();
              $scope.closeModal();
            })
          }
        
        
          $scope.deleteQuestion = function(id) {
            triviaSrvc.deleteQuestion(id).then(function (response) {
              $scope.getQuestions()
            });
        
          }
        
          $scope.getByDifficulty = function(difficulty) {
            triviaSrvc.getByDifficulty(difficulty).then(function(response) {
              $scope.questions = response;
              addDifficulty($scope.questions);
            })
          }
        
          $scope.changePage = function(page, i) {
            triviaSrvc.changePage(page + i).then(function(response) {
              $scope.questions = response;
              addDifficulty($scope.questions);
            })
            $scope.page = page + i;
          }
        
          $scope.checkAnswer = function(questionId, chosenAnswer) {
            var question;
            for (var i = 0; i < $scope.questions.length; i++) {
              if ($scope.questions[i]._id == questionId) {
                question = $scope.questions[i];
                break;
              }
            }
            question.chosenAnswer = chosenAnswer;
          }
        
          $scope.openModal = function (question) {
            $scope.currentQuestion = question;
            if (question) {
              $scope.editing = true;
            } else {
              $scope.addingNew = true;
            }
            $scope.modalOpen = true;
          }
        
          $scope.closeModal = function () {
            $scope.editing = false;
            $scope.addingNew = false;
            $scope.modalOpen = false;
          }


    })





// <button ng-click='deleteTrivia(question.id)'></button>

