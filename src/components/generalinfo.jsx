import { useState } from "react";

function Headers(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function changeUserName(e){
        setName(e.target.value);
    }

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePhoneNumber(e){
        setPhoneNumber(e.target.value);
    }

    return (
        <>
        <><div>General Information</div></>

        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <div>
                <input value={name} placeholder="Name" onChange={changeUserName}>
                </input>
            </div>
            <div>
                <input value={email} placeholder="Email" onChange={changeEmail}>
                </input>
            </div>
            <div>
                <input value={phoneNumber} placeholder="000-000-0000" onChange={changePhoneNumber}>
                </input>
            </div>
        </form>
        </>
    )
}

export {Headers};