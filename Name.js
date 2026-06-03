import {useState} from "react";

const Name = () => {
    const [name, setName] = useState("");

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h2>hello {name}</h2>
        </>
    );
};

export default Name;