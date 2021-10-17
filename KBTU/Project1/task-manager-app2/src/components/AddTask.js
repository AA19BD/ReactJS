import React,{useState} from 'react'


const AddTask = ({onAdd,setStatus}) => {
    const [text,setText] =useState('')
    const [day,setDay] =useState('')
    const [completed,setCompleted] =useState(false)

    const onSubmit=(e)=>{ 
        e.preventDefault();
        onAdd({text,day,completed})
        setText('')
        setDay('')
        setCompleted(false)
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
      }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" 
                placeholder="Add Task" 
                value={text} 
                required
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="date" placeholder="Add Day&Time"
                 value={day}
                 required
                 onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Completed</label>
                <input 
                type="checkbox" 
                checked={completed}
                value={completed}
                onChange={(e) => setCompleted(e.currentTarget.checked)}/>
            </div>

            <div className="select">
                <input type="submit" 
                value="Add Tasks" 
                className="btn btn-block"/>
                <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default AddTask;
