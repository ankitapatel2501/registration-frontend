import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button><br /><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>You typed: {name}</p>
        </>
    );
};

export default Counter;