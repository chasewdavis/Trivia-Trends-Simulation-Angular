angular.module('trivia').service('triviaSrvc', function($http){

    this.getTrivia = function(){
        return $http.get('/api/trivia/questions').then(response => {
            return response.data;
        })
    }

    this.getTriviaDiff = function(difficulty){
        return $http.get(`/api/trivia/questions/difficulty/${difficulty}`).then(response => {
            return response.data
        })
    }

    this.addTrivia = function(){
        return $http.post('/api/trivia/questions').then(response =>{
            return response.data
        })
    }

    this.editTrivia = function(id){
        return $http.put(`/api/trivia/questions${id}`).then(response => {
            return response.data
        })
    }

    this.deleteTrivia = function(id){
        return $http.delete(`api/trivia/questions/${id}`).then(response =>{
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