import { useState , useEffect } from 'react';

import axios from "axios";
import './App.css';

function App() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res=>{setItems(res.data.meals)})
    .catch((err) => {
      console.log(err);
    });
  },[])
  const itemList = items.map(({strMeal,strMealThumb,idMeal})=>{
    return (
      <div className='card'>
        <img src={strMealThumb}/>
        <div className='content'>
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
        </div>
      </div>
    );
  })
  return (
    <div className='main'>
      <h1 >MEALS</h1>
    <div className='container'>
      {itemList}
    </div>
    </div>
  );
}

export default App
