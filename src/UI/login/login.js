import { createRef, useState } from "react";
import { Loginservice } from "../../service/validateLogin";

export function Login() {
    let lref = createRef();
    let pref = createRef();
    let [msg, setMsg] = useState('');

    function doLogin() {
        let login = lref.current.value;
        let password = pref.current.value;

        Loginservice.checkLogin(login, password)
            .then(response => {
                setMsg('Hello ' + login);
            })
            .catch(error => {
                setMsg('Invalid login or password');
            });
    }

    return (
        <div>
            <div>
                <label htmlFor="">Login</label>
            </div>
            <div>
                <input type="text" name="lg" ref={lref} />
            </div>
            <div>
                <input type="password" name="ps" ref={pref} />
            </div>
            <div>
                <button onClick={doLogin}>Next</button>
            </div>
            <div>
                <p>{msg}</p>
            </div>
        </div>
    );
}
