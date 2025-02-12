import { useState, useEffect } from "react";

function ToDoList() {
  const [newTask, setNewTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  // Load tasks from LocalStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setListOfTasks(savedTasks);
  }, []);

  // Save tasks to LocalStorage whenever listOfTasks changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks));
  }, [listOfTasks]);

  return (
    <>
      <section className="comm-section">
        <div className="sec-hdn">
          <h2 className="comm-hdn">To Do List</h2>
        </div>

        <div className="to-do-wrap">
          <div className="to-do-box">
            <h3 className="comm-sec-hdn bl">Pending</h3>

            {listOfTasks.map((item, index) => (
              <div className="to-do-check" key={index}>
                <label>{item}</label>
                <input type="checkbox" id={"list" + index} />
              </div>
            ))}
          </div>

          {/* <div className="to-do-box">
            <h3 className="comm-sec-hdn bl">Completed</h3>

            <div className="to-do-check">
              <label htmlFor="practice2">Practice React</label>
              <input type="checkbox" name="practice2" id="" />
            </div>

            <div className="to-do-check">
              <label htmlFor="practice3">Practice React</label>
              <input type="checkbox" name="practice3" id="" />
            </div>
          </div> */}

          <div className="add-to-do-wrap">
            <input
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              value={newTask}
            />
            <button
              className="button"
              id="addToDo"
              onClick={() => {
                if (newTask.trim()) {
                  setListOfTasks([...listOfTasks, newTask]);
                  setNewTask(""); // Clear input field
                }
              }}
            >
              Add You Task
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToDoList;
