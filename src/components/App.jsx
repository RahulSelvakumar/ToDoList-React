import React, { useState } from "react";

function App() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setInput(value);
    }

    function addItem() {
        setList(preValue => {
            return [...preValue, input];
        })
        setInput("");
    }

    function deleteItem(id) {
        setList(preValue => {
            return (
                preValue.filter((value,index) => { return id !== index }))
        })
        console.log(list);
    }

    return (
        <div>
            <heading><h1>To Do List</h1></heading>

            <div className="input">
                <input placeholder="What's the task" onChange={handleChange} value={input} />
                <span><button onClick={addItem}>+</button></span>
            </div>

            <div className="List">
                <ul>
                    {
                        list.map((item, key) => { return <li onClick={() => { deleteItem(key) }}>{item}</li> })
                    }
                </ul>
            </div>
        </div>);
}
export default App;