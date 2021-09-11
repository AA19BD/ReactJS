import React,{useEffect,useState} from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "519340e8"; //!!This is the application ID, you should send with each API request.
  const APP_KEY = "fb92abc7e5403fc019e48060757e94ec	"; //!!These are application keys used to authenticate requests.


  // const [counter,setCounter]=useState(0);
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  useEffect(()=>{ //!!То есть при каждом обновлении страницы или при каждом re-render какого либо объекта срабатывает useEffect()
    getRecipes();
  },[query]);
  //!!При добавлении ,[] после внутренней функции,то useEffect срабатывает только 1 раз!!

  const getRecipes=async ()=>{//!!здесь нужно чтобы все работало асинхронно после чего в переменно response мы должны подождать(await) ответа на request,который мы запросили или взяли(fetch)
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();//!!мы не знаем когда придет наш response из-за этого должны ждать(await)
    setRecipes(data.hits);
    console.log(data.hits);
  };
  //Здесь мы взаимосвязь в useSate между recipes и setRecipes
  //setRecipes(data.hits)->recipes взяла автоматом все данные

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}  className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button  type="submit" className="search-btn" >Search</button>
      </form>
      {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
      <div className="recipes">
      {recipes.map((recipe)=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))} 
      </div>
      
    </div>
  ); 
};

export default App;
