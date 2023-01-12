import React, { useEffect, useState } from 'react';


const stateToMessage = {
    noMatch: {
        isError: true,
        message: "Password must be at least 10 charachters"
    },
    match: {
        isError: false,
        message: "Correct"
    },
}
const constraints = {
    charsAtLeast: 5,
    atLeastNumber: true,
    atLeastOneSpecial: true
}


function checkPassword(password, constraints) {

    return password.length >= constraints.charsAtLeast

        && (constraints.atLeastNumber ? /\d/.test(password) : true)
        && (constraints.atLeastOneSpecial ? /[$!]/.test(password) : true)
}

function Form() {
    const [password, setPassword] = useState("")
    const [match, setMatch] = useState(stateToMessage.noMatch);
    const matchStyle = match.isError ? { color: "red" } : { color: "green" }

    function handlePassowrdInputChange(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (checkPassword(password, constraints)) {
            setMatch(stateToMessage.match)
        } else {
            setMatch(stateToMessage.noMatch)

        }

    }, [password])


    return <form>

        <div className="form-group" style={{ textAlign: "start" }}>
            <label htmlFor="exampleInputPassword1" >Password</label>
            <input
                onChange={handlePassowrdInputChange}
                type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <span style={matchStyle}>{match.message}</span>
        </div>
        <button
            style={{ margin: "5px" }}
            type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Submit</button>
    </form>;
}

export default Form;
