import { useState, useEffect } from "react";

function ToDoList() {
  const [newTask, setNewTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  // Load tasks from LocalStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setListOfTasks(savedTasks);
    console.log("1");
  }, []);

  // Save tasks to LocalStorage whenever listOfTasks changes
  // useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(listOfTasks));
  // }, [listOfTasks]);

  // Function to toggle task status
  const toggleTaskStatus = (index) => {
    setListOfTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <section className="comm-section">
        <div className="sec-hdn">
          <h2 className="comm-hdn">To Do List</h2>
        </div>

        <div className="to-do-wrap">
          {/* Pending Tasks Section */}
          <div className="to-do-box">
            <h3 className="comm-sec-hdn bl">Pending</h3>
            {listOfTasks
              .filter((task) => !task.completed)
              .map((item, index) => (
                <div className="to-do-check" key={index}>
                  <label>{item.text}</label>
                  <input
                    type="checkbox"
                    id={"list" + index}
                    onChange={() => toggleTaskStatus(index)}
                  />
                </div>
              ))}
          </div>

          {/* Completed Tasks Section */}
          <div className="to-do-box">
            <h3 className="comm-sec-hdn bl">Completed</h3>
            {listOfTasks
              .filter((task) => task.completed)
              .map((item, index) => (
                <div className="to-do-check" key={index}>
                  <label>{item.text}</label>
                  <input
                    type="checkbox"
                    checked
                    onChange={() => toggleTaskStatus(index)}
                  />
                </div>
              ))}
          </div>

          {/* Add Task Section */}
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
                  setListOfTasks([
                    ...listOfTasks,
                    { text: newTask, completed: false },
                  ]);
                  setNewTask(""); // Clear input field
                }
              }}
            >
              Add Your Task
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToDoList;
