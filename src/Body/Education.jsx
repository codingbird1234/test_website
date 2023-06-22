import React from "react";
import { useState } from "react";
import './Education.css';
import MathTest from "./SubjectPages/MathTest";
import MathStudy from "./SubjectPages/MathStudy";
import { useNavigate } from "react-router-dom";

function Subject(props){

    const subjectStyle = {
        backgroundColor: props.color,
    };

    return (
        <button className='subject' style={subjectStyle}>
            <h2 className='subjectName'>{props.name}</h2>
            {props.isTested ? (
                <p className="state">{props.name} 공부하러 가기</p>
            ) : (
                <p className="state">{props.name} 테스트 보러가기</p>
            )}
        </button>
        //{ canStudy ?  <MathStudy></MathStudy>: <MathTest></MathTest> }
    );
}

function Education(){
    const [currentPage, setCurrentPage] = useState("home");

    const nextPage = (name) => {
        setCurrentPage(name);
    };

    return (
        <div className='subjectBox'>
            <Subject name='수학' isTested={false} color='rgb(27, 150, 212)'></Subject>
            <Subject name='영어' isTested={false} color='rgb(241, 241, 24)'></Subject>
            <Subject name='과학' isTested={true} color='rgb(134, 224, 66)'></Subject>
            <Subject name='사회' isTested={true} color='rgb(237, 177, 74)'></Subject>
            <Subject name='국어' isTested={true} color='rgb(234, 42, 42)'></Subject>
            <Subject name='역사' isTested={true} color='rgb(168, 84, 228)'></Subject>

        </div>
    );
}

export default Education;