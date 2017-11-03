angular.module('trivia').service('triviaSrvc', function ($http) {

    this.getQuestions = function () {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions').then(resp => {
            return resp.data;
        })
    }

    this.getByDifficulty = function (difficulty) {
        return $http.get(`https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${difficulty}`).then(response => {
            return response.data
        })
    }

    this.addQuestion = function(question) {
        return $http({
            method: 'POST',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions',
            data: question
        }).then(function(response) {
            console.log(response.data)        
          return response.data;
        }).catch( err => {
            console.log('error adding new question', err)
        })
      }

    this.editQuestion = function (id) {
        return $http.put(`https://practiceapi.devmountain.com/api/trivia/questions${id}`).then(response => {
            return response.data
        })
    }

    this.deleteQuestion = function (id) {
        return $http.delete(`https://practiceapi.devmountain.com/api/trivia/questions/${id}`).then(response => {
            response.data
        })
    }
    
})

/* bring these into the controller. pass through the corresponding data. Example: 
angular.module('trivia').controller('triviaCtrl', function($scope, $state.params, triviaSrvc))
    $scope.id = $stateParams.id;
    triviaSrvc.deleteTrivia($stateParams.id).then(questions =>{
        $scope.question = question
    })

front end:
<button ng-click='deleteTrivia(questiom.id)'></button> */