import React, { useState} from "react";
import { TaskList } from "./components/TaskList";

export default function App() {
    const [tasks, setTasks] = useState([
        {id: 1, task: "Go shopping", done: true },
        { id: 2, task: "Wash dishes", done: false },
    ]);

return (
    <TaskList tasks={tasks} />)
}




{/* <form>
    <label>
        Number of guests:
        <input type="number" name="guests" />
    </label>
    <button type="Submit">Submit</button>
</form> */}