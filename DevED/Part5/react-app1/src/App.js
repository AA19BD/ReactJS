import React,{ useState} from 'react';
// import Hello from './component/sayHello';
import Tweet from './Tweet';


function App() {
  const [isRed,setRed]=useState(false);
  const [count,setCount]=useState(0);
  const [users,setUsers]=useState([
    {name:'Abylai',message:'Hello There',},
    { name:'Bob', message:'Not that good!'},
    { name:'Steve', message:'Very good!'}
  ]);
  const increment=()=>{
    setCount((prev)=> prev+1);
    setRed((prev)=>!prev);
  };
  
  return(
    <div className="app">
      {users.map(user=>(
        <Tweet name={user.name} message={user.message}/>
      ))}

    </div>
    // <div className='app'>
    //   <h1 className={isRed ? 'red':''}>Change my Color!</h1>
    //   <button onClick={increment}>Increment</button>
    //   <h1>{count}</h1>
    // </div>
    // <div className='app'>
    //   <Tweet name='James' message='Call me James!' likes='200'/>
    //   <Tweet name='Bob' message='Dont bother me!' likes='300'/>
    //   <Tweet name='Steven 'message='Welcome body! 'likes='400'/>
    // </div>
  );
}
export default App;