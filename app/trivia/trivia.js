angular.module('trivia').component('triviaHolder', {
    templateUrl: 'app/trivia/trivia.html',
    controllerAs:'gc',
    controller: function(triviaSrvc){
        console.log('fired')
        this.getQuestions = function(){
            triviaSrvc.getQuestions().then( questions => {
                this.questions = questions
                console.log(questions)
            })
        }
        this.getQuestions()
    }
})
