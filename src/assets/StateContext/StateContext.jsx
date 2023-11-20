import { createContext, useEffect, useState } from "react";
import { useContext } from "react";


const StateContext = createContext()

export const StateContextProvider = ({children}) =>{
       
    const [meals,setMeals] = useState([]);
    const[isLoading,setLoading] = useState(true)


    useEffect(() =>{
        
        fetchData()
    },[])

    const fetchData = async() =>{
        const api = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
        const api2 = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        const {meals : mealsFromApi } = await api.json()
        const {meals : mealsFromApi2 } = await api2.json()

        setMeals([...mealsFromApi2,...mealsFromApi])
        setLoading(false)
      console.log(meals);
        
    }
   
 

const data = {meals,setMeals,isLoading}

return(
    <StateContext.Provider value={data}>
        {children}
    </StateContext.Provider>
)
}

export const StateContextCustomHook = () => useContext(StateContext)


