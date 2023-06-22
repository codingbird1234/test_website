import React from "react";
import { useState } from "react";

function Submit(props){
    return (
        <button>제출</button>
    );
}

function Question(props){
    return (
        <div>
            <h3>문제 {props.key}. {props.question}</h3>
            <input type='text'></input>
        </div>
    );
}

function MathTest(){
    const questions = [];

    return (
        <div>
            {questions.map((question, index) => (
                <Question key={index}>{question}</Question>
            ))}
            <Submit></Submit>
        </div>
    );
}

export default MathTest;