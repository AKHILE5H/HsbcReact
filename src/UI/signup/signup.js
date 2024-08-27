import { useState } from "react"

export function SignUp(){

    let[user,setUser] = useState({fname:'',email:''});

    function formChanged(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    return(
        <div>
            <h3>
                Sign Up
                {JSON.stringify(user)}
            </h3>
            <div>
                <label htmlFor="">Full name</label>
                <input type="text" name="fname" onChange={formChanged} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email"  onChange={formChanged}/>
            </div>

            <div>
                <button>Next</button>
            </div> 
        </div>
    )
}