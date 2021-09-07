console.clear();

// function App(){
//   return React.createElement('div',null,[
//     React.createElement('button',null,'click'),
//     React.createElement('button',null,'click'),
//     React.createElement('p',null,'0'),
//   ])
// }

function App() {
  //other functions or other components
  return (
    //this is the main component
    <>
      //fragments
      <Nav />
      <Home />
    </>
  );
}

function Nav() {
  //smaller component
  return (
    <nav>
      <h1 className="logo">Logo</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
function Home() {
  //Home component
  return (
    <div>
      <h2>Join Our Magic Club</h2>
      <p>Harry Potter's shirts</p>
      <button>Buy</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#main"));

// ReactDOM.render(
//     (<div>
//         <h2>Join Our Magic Club</h2>
//         <p>Harry Potter's shirts</p>
//         <button>Buy</button>
//       </div>),document.querySelector('#main'));