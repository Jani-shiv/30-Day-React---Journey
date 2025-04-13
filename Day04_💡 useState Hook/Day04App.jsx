// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Day04App.css";

function Day04App() {
  // Initialize state variables with localStorage for persistence
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [completedCount, setCompletedCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [streak, setStreak] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [date, setDate] = useState(new Date());
  const [motivation, setMotivation] = useState("");

  // Array of motivational quotes
  const quotes = [
    "Keep pushing forward!",
    "Small steps lead to big changes.",
    "You're doing great!",
    "One task at a time.",
    "Consistency is key.",
    "You're closer than you think.",
    "Today is a great day to be productive.",
    "Believe in yourself and your goals.",
    "Every completed task is progress.",
    "Productivity feels good!"
  ];

  // Effect to handle task updates and streak calculation
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const completedTasks = tasks.filter((task) => task.completed).length;
    setCompletedCount(completedTasks);

    const today = new Date().toDateString();
    const lastComplete = localStorage.getItem("lastComplete");
    const currentStreak = parseInt(localStorage.getItem("streak")) || 0;

    // Update streak if tasks were completed today
    if (lastComplete !== today && completedTasks > 0) {
      if (
        new Date(lastComplete).getTime() + 86400000 ===
        new Date(today).getTime()
      ) {
        localStorage.setItem("streak", currentStreak + 1);
        setStreak(currentStreak + 1);
      } else {
        localStorage.setItem("streak", 1);
        setStreak(1);
      }
      localStorage.setItem("lastComplete", today);
    } else {
      setStreak(currentStreak);
    }
  }, [tasks]);

  // Effect to update motivation quote when tasks change
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setMotivation(quotes[randomIndex]);
  }, [tasks.length]);

  // Function to play sound effects
  const playSound = (type) => {
    const audio = new Audio(type === "add" ? "/add.mp3" : "/delete.mp3");
    audio.play();
  };

  // Function to add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { text: newTask, completed: false, id: Date.now() },
      ]);
      playSound("add");
      setNewTask("");
    }
  };

  // Function to toggle task completion
  const toggleCompletion = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const justCompleted = updated.find((task) => task.id === id)?.completed;
    setTasks(updated);
    if (justCompleted) setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    playSound("delete");
  };

  // Functions to handle task editing
  const startEditing = (id, text) => {
    setEditId(id);
    setEditedText(text);
  };

  const saveEditedTask = (id) => {
    if (editedText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: editedText } : task
        )
      );
      setEditId(null);
      setEditedText("");
    }
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return false;
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Chart data configuration
  const chartData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedCount, tasks.length - completedCount],
        backgroundColor: ["#4CAF50", "#FF5252"],
        hoverBackgroundColor: ["#45a049", "#ff1744"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  // Render the component
  return (
    <div className={`app ${theme}`} style={{ minHeight: "100vh", padding: "20px" }}>
      {showConfetti && <Confetti />}

      {/* Header Section */}
      <header className="app-header" style={{ marginBottom: "2rem" }}>
        <h1 className="fade-in" style={{textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem"}}>
          📝 Day 04 - useState To-Do Tracker
        </h1>
        <button className="theme-toggle" onClick={toggleTheme} style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          borderRadius: "20px"
        }}>
          {theme === "dark" ? "🌞" : "🌙"} Toggle Theme
        </button>
      </header>

      {/* Motivation Quote Section */}
      <div className="motivation" style={{
        textAlign: "center",
        fontSize: "1.2rem",
        padding: "15px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        marginBottom: "2rem"
      }}>
        🌟 {motivation}
      </div>

      {/* Task Statistics Section */}
      <div style={{
        textAlign: "center",
        margin: "2rem 0",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        animation: "fadeInDown 0.5s ease-out"
      }}>
        <div className="tracker" style={{
          padding: "15px 25px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)"
        }}>
          ✅ Completed: {completedCount} / {tasks.length}
        </div>

        <div className="streak" style={{
          padding: "15px 25px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)"
        }}>
          🔥 Streak: {streak} day{streak !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Task Input Section */}
      <div className="input-group" style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 0",
        maxWidth: "600px",
        margin: "0 auto 2rem"
      }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your task..."
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          style={{
            flex: "1",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "1rem"
          }}
        />

        <button onClick={addTask} style={{
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: "bold"
        }}>➕ Add</button>
      </div>

      {/* Filter Buttons Section */}
      <div className="filter-group" style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "2rem 0"
      }}>
        {["all", "active", "completed"].map((filterType) => (
          <button
            key={filterType}
            className={filter === filterType ? "active" : ""}
            onClick={() => setFilter(filterType)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              textTransform: "capitalize"
            }}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Task List Section */}
      <ul className="task-list" style={{
        margin: "2rem auto",
        maxWidth: "800px",
        padding: "0",
        listStyle: "none"
      }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed bounce" : "slide"}`}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            {editId === task.id ? (
              // Edit Mode
              <>
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEditedTask(task.id)}
                  autoFocus
                  style={{
                    flex: "1",
                    padding: "8px",
                    borderRadius: "5px"
                  }}
                />
                <button onClick={() => saveEditedTask(task.id)} style={{
                  padding: "8px",
                  borderRadius: "5px"
                }}>✅</button>
              </>
            ) : (
              // View Mode
              <>
                <span
                  onClick={() => toggleCompletion(task.id)}
                  className="task-text"
                  style={{
                    flex: "1",
                    cursor: "pointer",
                    textDecoration: task.completed ? "line-through" : "none"
                  }}
                >
                  {task.text}
                </span>
                <button onClick={() => startEditing(task.id, task.text)} className="edit-btn" style={{
                  padding: "8px",
                  borderRadius: "5px"
                }}>
                  ✏️
                </button>
                <button onClick={() => deleteTask(task.id)} className="delete-btn" style={{
                  padding: "8px",
                  borderRadius: "5px"
                }}>
                  🗑️
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Calendar and Chart Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem 0",
        gap: "2rem",
        flexWrap: "wrap"
      }}>
        <div className="calendar-wrapper" style={{
          flex: "1",
          minWidth: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "15px"
        }}>
          <h3 style={{ marginBottom: "1rem" }}>📅 Task Calendar</h3>
          <Calendar value={date} onChange={setDate} />
        </div>

        <div className="chart-wrapper" style={{
          flex: "1",
          minWidth: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "15px"
        }}>
          <h3 style={{ marginBottom: "1rem" }}>📊 Task Progress</h3>
          <Chart type="pie" data={chartData} options={{
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }} />
        </div>
      </div>
    </div>
  );
}

export default Day04App;