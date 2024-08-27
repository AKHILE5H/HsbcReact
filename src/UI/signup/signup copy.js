import { useState } from "react"

export function SignUp(){

    let [fname,setFname] = useState('');
    let [email,setEmail] = useState('');

    function fnameChanged(fname1){
        setFname(fname1.target.value);
    }
    function emailChanged(email){
        setEmail(email.target.value);
    }

    return(
        <div>
            <h3>
                Sign Up
            </h3>
            <div>
                <label htmlFor="">Full name</label>
                <input type="text"  onChange={(e)=>fnameChanged(e)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text"  onChange={(e)=>emailChanged(e)} />
            </div>

            <div>
                <button>Next</button>
            </div>

            <div>
                <h3>{fname}</h3>
                <h3>{email}</h3>
            </div>   
        </div>
    )
}