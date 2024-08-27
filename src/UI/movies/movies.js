import React, { useState } from "react";
import Axios from "axios";

export function Movies() {

    const [Movies, setMovies] = useState([]);

    function getData() {
        let url = 'http://localhost:8080/movies';
        Axios.get(url).then((res) => {
            setMovies(res.data);  
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <h3>Movies</h3>
            <button onClick={getData}>Get data</button>
            <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Movies.map((Movie) => (
                                <tr key={Movie.id}>
                                    <td>{Movie.id}</td>
                                    <td>{Movie.name}</td>
                                    <td>{Movie.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
               
            </div>
        </div>
    );
}
