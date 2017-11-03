angular.module('trivia').component('triviaHolder', {
    templateUrl: 'app/trivia/trivia.html',
    controllerAs:'gc',
    controller: function(triviaSrvc){
        this.getQuestions = function(){
            triviaSrvc.getQuestions().then( questions => {
                this.questions = questions
            })
        }
        this.getQuestions()
    }
})
