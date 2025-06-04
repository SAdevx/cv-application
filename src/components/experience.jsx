import { useState } from "react";

function Experience(){
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleCompany(e){
        setCompany(e.target.value);
    }

    function handlePosition(e){
        setPosition(e.target.value);
    }

    function handleResponsibilities (e){
        setResponsibilities(e.target.value);
    }

    function handleStartDate(e){
        setStartDate(e.target.value);
    }

    function handleEndDate(e){
        setEndDate(e.target.value);
    }

    return (
        <>
            <div>
                Experience
            </div>
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <div>
                    <input onChange={handleCompany} value={company} placeholder="company"></input>
                </div>
                <div>
                    <input onChange={handlePosition} value={position} placeholder="position"></input>
                </div>
                <div>
                    <input onChange={handleResponsibilities} value={responsibilities} placeholder="responsibilities">
                    </input></div>
                <div>
                    <input onChange={handleStartDate} value={startDate} placeholder="start-date">
                    </input></div>
                <div>
                    <input onChange={handleEndDate} value={endDate} placeholder="end-date"></input>
                </div>
            </form>
        </>
    );
}

export { Experience };