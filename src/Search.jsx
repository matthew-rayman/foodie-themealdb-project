import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from './Cards'
import Navbar from './Navbar';
import { LuLoader } from "react-icons/lu";


const Search = () => {
    const {name} = useParams();
    const [meals,setMeals] = useState([]);
    const [isLoading,setLoading] = useState(true);

    useEffect(()=>{
        fetchData();
        
    },[])

    const fetchData = async() =>{
        const api = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const {meals} = await api.json();
        setMeals(meals);
        setLoading(false);
        }

  return (
    <div>
      {isLoading?(
        <div className='flex flex-col items-center justify-center h-screen'>
          <LuLoader className=' w-14 p-2 h-14 animate-spin text-orange'/>
        </div>
      ):(
        <div>
        <Navbar/>
        <div className='flex animate__animated animate__slideInUp flex-wrap ms-[20px] my-[40px] justify-evenly'>
         {meals.map(meal =>{
          return(
          <Cards  key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
              )
            })}
       </div>
      </div>
      )}

  </div>
  )
}

export default Search
