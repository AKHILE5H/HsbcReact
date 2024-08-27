import React, { useState, createRef } from "react";

export function Topics() {
    
    let [tps, setTps] = useState(['React', 'Vue']);
    let iRef = createRef();

    var addTopic = () => {
            setTps([...tps, iRef.current.value]);     
    };

    return (
        <div>
            <h3>Topics...</h3>
            <ol>
                {tps.map((t, index) => <li key={index}>{t}</li>)}
            </ol>
            <input type="text" ref={iRef} />
            <button onClick={addTopic}>Add</button>
        </div>
    );
}
