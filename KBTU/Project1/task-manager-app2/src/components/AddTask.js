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

                <input type="submit" 
                value="Add Tasks" 
                className="btn btn-block"/>
               
        </form>
    )
}

export default AddTask;
