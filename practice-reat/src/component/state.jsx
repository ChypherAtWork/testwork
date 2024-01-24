import { useState } from "react";

function Condition(){

    const [change, setChange] = useState(true);

    return(
        <div>
            <button onClick={() => setChange(!change)}>
                chnage to the {change ? 'walk' : 'stop'}
            </button>
            <h1 style={{color: change ? "green" : "red",}}>
                {change ? 'Walk' : 'Stop'}
            </h1>
        </div>
    );



}


export default Condition;