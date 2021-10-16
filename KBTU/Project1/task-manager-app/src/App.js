import React,{useState,useEffect} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const[status,setStatus]=useState('all');
  const[filteredTasks,setFilteredTasks]=useState([]);
  const[show,setShow]=useState(true)
  const[tasks,setTasks]=useState([
    { 
        id:1,
        text:'Doctor Appointment',
        day:'Feb 5th at 2:30pm',
        completed:false,
    },
    { 
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1:30pm',
        completed:false,
    },
    { 
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        completed:false
    }
  ])
  //RUN ONCE WHEN THE APP START
  useEffect(() =>{
    getLocalTodos();
  },[])
  //USE EFFECT
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[tasks,status])
  //Functions
  const filterHandler=()=>{
    switch(status) {
      case 'completed':
        setFilteredTasks(tasks.filter((task)=> task.completed===true))
        break;
      case 'uncompleted':
        setFilteredTasks(tasks.filter((task)=> task.completed===false))
        break;
      default:
        setFilteredTasks(tasks)
        break;
    };
  };
  //Save to Local Storage
  const saveLocalTodos=() => {
    localStorage.setItem('tasks',JSON.stringify(tasks)); 
  };
  const getLocalTodos=() => {
    if(localStorage.getItem('tasks')===null){
      localStorage.setItem('tasks',JSON.stringify([]));//if its empty
    }else{
      let tasksLocal=JSON.parse(localStorage.getItem('tasks'));
      setTasks(tasksLocal)
    }
  }

  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter(t=>t.id !== id))
  }
  //Toggle reminder
  const toggleCompleted=(id)=>{
    setTasks(tasks.map((task)=>(
      task.id===id ? {...task,completed:!task.completed} : task
      )))
  }
  //Add Task 
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
      <Header setShow={setShow} show={show} />
      {show ?<AddTask onAdd={addTask} setStatus={setStatus}/> : ""}
      {tasks.length>0 ?<Tasks tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleCompleted}/>:"No Tasks!"}
    </div>
  );
}

export default App;
