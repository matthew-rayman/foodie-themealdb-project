import Cards from './Cards';
import Footer1 from './Footer1';
import Navbar from './Navbar';
import { StateContextCustomHook } from './assets/StateContext/StateContext';
import { CiCircleChevDown } from "react-icons/ci";



const Meal = () => {

    const {meals,isLoading} = StateContextCustomHook();
    return (
    <div>
      {isLoading?(
       <div className='flex flex-col items-center justify-center h-screen'>
       <CiCircleChevDown className=' w-16 p-2 h-16 animate-bounce text-orange'/>
     </div>
      ):(
        <div>
         <Navbar/>
      <div className='  flex animate__animated animate__fadeInUp animate__slow flex-wrap md:gap-4 gap-[14px] md:mt-9 md:mb-4 mb-4  mt-4  container mx-auto justify-center'>
      {meals.map(meal =>{
        return(
          <Cards  key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
        )
      })}
    </div>
   <Footer1/>
    </div> 
    
    )}
    </div>
  )
}

export default Meal
