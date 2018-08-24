import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state={ quiz_position : 1}
    }

    render(){
        let isQuizEnd1=true;
        const isQuizEnd =false;
        
        if((this.state.quiz_position-1)==quizData.quiz_questions.length){
            isQuizEnd1=true;
        }
        // else
        //     isQuizEnd=false;

        if(isQuizEnd1){
            return(
                <div>
                    <QuizEnd />
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/></div>
            )
        }
        
        else{
            return(
                <div>
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/></div>
            )
        }
    }
}

export default Quiz
