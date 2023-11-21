import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'animate.css';
import { BsYoutube } from 'react-icons/bs';
import { CgSpinner } from "react-icons/cg";
import Navbar from './Navbar';
import Footer1 from './Footer1'


const Detail = () => {
  const  { id } = useParams();
  const [item,setItem] = useState([]);
  const[isLoading,setLoading] = useState(true);

  useEffect(()=>{
    fetchMeal();
  },[])

  const fetchMeal = async () => {
   const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
   const { meals } = await api.json();
   setItem(meals[0]);
   setLoading(false);
 };
  
  const openYoutubeLink = () => {
    if (item.strYoutube) {
      window.open(item.strYoutube, '_blank');
    }
  };

  return (
    <div className=''>
      {isLoading? (
        
        <div className='flex flex-col items-center justify-center h-screen'>
            <CgSpinner className=' w-14 p-2 h-14 animate-spin text-orange'/>
        </div>
        
      ):(
    <div>
      <Navbar/>
     <div className='h-screen md:px-5  bg-back mx-auto container mt-4 md:mt-9'>
     <div className='md:flex md:flex-row  animate__animated animate__fadeInUp animate__slow items-center'>
       <img src={item?.strMealThumb} className='md:mb-6 mb-2 rounded-lg mx-auto h-[200px] lg:h-[350px]' alt="" />
      <div className='flex mx-3 flex-col md:me-8'>
        <h1 className='text-2xl font-semibold text-white md:mb-3 mb-1 tracking-wide'>{item?.strMeal}</h1>
        <h1 className="text-xl font-semibold text-white opacity-90 mb-2 md:mb-[14px] tracking-wide">{item?.strArea}</h1>
        <h1 className=' py-1 text-xs rounded-full text-center w-24 mb-2 md:mb-3 md:pb-[6px] bg-brown text-orange font-bold '>{item?.strCategory}</h1>
        <div className="flex ">
        
        <button onClick={openYoutubeLink} className="flex md:mb-2 mb-1 text-xs border-2 border-brown px-3 items-center rounded-full text-white"> Watch On
             <BsYoutube className='ms-4 text-red-600 text-3xl' />
          </button>
        </div>
        <p className=' md:max-w-[550px] md:min-w-[200px] min-h-[300px] max-h-[400px] bg-back text-gray-300 md:overflow-visible overflow-scroll md:h-[330px] text-xs md:tracking-wide leading-5 '>{item.strInstructions}</p>
      
      </div>
    </div>
    </div>
    </div>

    )}
    </div>
  );
};

export default Detail;
