import { useState } from "react";

function Update(){

    let id = 0;
    const [name, setName] = useState('');
    const [data, setData] = useState([]);


    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => {
                setData([
                ...data,
                { id: id++, name: name }
                ]);
            }}>Add</button>

                <ul>
                    {data.map((list) => 
                        <li key={list.id}>{list.name}</li>
                    )}
                </ul>

        </div>

    );


}


export default Update;