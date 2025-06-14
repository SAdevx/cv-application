import { useState } from "react";
import "../styles/style.css"

function Headers({name, email, phone, handleGenInfo}){
    const [show, setShow] = useState(false);

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
                <input name="name" value={name} placeholder="Name" onChange={(e) => handleGenInfo(e.target.name, e.target.value)}
               />
            </div>
            <div>
                <input name="email" value={email} placeholder="Email" onChange={(e) => handleGenInfo(e.target.name, e.target.value)}
                />
            </div>
            <div>
                <input name="phone" value={phone} placeholder="000-000-0000" onChange={(e) => handleGenInfo(e.target.name, e.target.value)}
              />
            </div>
            </form>}
        </>
    )
}

export {Headers};