export function CV({name, email, phone}){

    return (
        <>
        <div className="cv">
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
        </div>
        </> 
    )
}