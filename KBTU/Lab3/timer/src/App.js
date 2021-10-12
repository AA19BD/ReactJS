import React,{useState} from 'react';
import styled from 'styled-components'
import './App.css';
import Timer from './Timer';


function App() {
  const [seconds,setSeconds]=useState(0)
  const [active,setActive] = useState(true)
 
  return (
    <div className="App">
      <ContainerCard>
          <span>App Component</span>   
          {active && <Timer seconds={seconds} active={active} setSeconds={setSeconds} setActive={setActive} />}
          {!active && <h3>Successfully removed!</h3>}
          
      </ContainerCard>
    </div>
  );
}

export default App;


const ContainerCard=styled.div `
  max-width: 960px;
  padding: 1rem!important;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  color:#d2691e;
  h3{
    margin-top: 1rem!important;
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc;
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 1em;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
            -webkit-font-smoothing: antialiased;
  }
`