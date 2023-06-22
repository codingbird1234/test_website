import React from "react";
import Profile from "./Profile";
import './Enter.css';
import Education from "./Education";
import { useState } from "react";
import MathTest from "./SubjectPages/MathTest";

function Enter(){
    const [subjectId, setSubjectId] = useState(true);

    const handlePage = () => {
        setSubjectId(!setSubjectId);
    };

    return (
        <div className="window">
            <div className='profileBar'>
                <Profile></Profile>
            </div>
            <div className='contents'>
                <div class='element'>
                    {subjectId ? <Education onPage={handlePage}></Education> : <MathTest onPage={handlePage}></MathTest>}
                </div>
            </div>
        </div>
    );
}

export default Enter;