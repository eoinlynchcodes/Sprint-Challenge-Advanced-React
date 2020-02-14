import React from 'react';
import { useFormHandler } from '../customHooks/useFormHandler';

export default function EmailForm(){

    const [ fullName, setFullName, handleFullName ] = useFormHandler("");
    const [ email, setEmail, handleEmail ] = useFormHandler("");

    const resetValues = e => {
        e.preventDefault();
        setFullName("");
        setEmail("");
    }

    return(
        <div>
            <h2>If you'd like to be added to our mailing list, add your information below.</h2>
            <form onSubmit={resetValues}>
                <label>Full Name:</label>
                <input 
                placeholder="Enter your Full Name:"
                onChange={e => handleFullName(e.target.value)}
                type="text"
                value={fullName}
                />

                <label>Email:</label>
                <input 
                placeholder="Email:"
                onChange={e => handleEmail(e.target.value)}
                type="text"
                value={email}
                />
                <button>Add to mailing list!</button>
            </form>
        </div>
    )
}