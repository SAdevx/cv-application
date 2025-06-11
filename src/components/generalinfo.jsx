import { useState } from "react";
import "../styles/style.css"

function Headers(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [show, setShow] = useState(false);

    function changeUserName(e){
        setName(e.target.value);
    }

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePhoneNumber(e){
        setPhoneNumber(e.target.value);
    }

    function showMore(){
        setShow(!show);
    }

    return (
        <>
        <button onClick={showMore}>General Information</button>
        {show &&  <form onSubmit={e => {
            e.preventDefault();
        }}>
            <div>
                <input value={name} placeholder="Name" onChange={changeUserName}
               />
            </div>
            <div>
                <input value={email} placeholder="Email" onChange={changeEmail}
                />
            </div>
            <div>
                <input value={phoneNumber} placeholder="000-000-0000" onChange={changePhoneNumber}
              />
            </div>
            </form>}
        </>
    )
}

export {Headers};