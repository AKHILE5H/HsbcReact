import React, { useState } from "react";
import Axios from "axios";

export function Users() {

    const [users, setUsers] = useState([]);

    function getData() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(url).then((res) => {
            setUsers(res.data);  
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <h3>Users</h3>
            <button onClick={getData}>Get data</button>
            <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
               
            </div>
        </div>
    );
}
