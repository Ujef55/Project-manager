import { useState } from "react";

function NewTask( {onAdd} ) {

    const [enteredValue, setEnteredValue] = useState('');

    function handleChange(event) {
        setEnteredValue(event.target.value);
    }

    function handleClick() {
        setEnteredValue('');
        onAdd(enteredValue);
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text"
            onChange={handleChange}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            value={enteredValue} />
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default NewTask;