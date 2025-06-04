import { useState } from "react";

export default function Education(){
    const [major, setMajor] = useState('');
    const [school, setSchool] = useState('');
    const [monthYr, setMonthYr] = useState('');

    function handleMajor(e){
        setMajor(e.target.value);
    }

    function handleSchool(e){
        setSchool(e.target.value);
    }

    function handleMonthYr(e){
        setMonthYr(e.target.value);
    }

    return (
        <>
        <div>Education</div>
        <form >
            <div>
                <input onChange={handleMajor} value={major} placeholder="Major"></input>
            </div>
            <div>
                <input onChange={handleSchool} value={school} placeholder="School"></input>
                </div>
            <div>
                <input onChange={handleMonthYr} value={monthYr} placeholder="startdate-enddate"></input>
            </div>
        </form>
        </>
    );
}

export {Education};