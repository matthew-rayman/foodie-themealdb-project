import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'animate.css';
import { BsYoutube } from 'react-icons/bs';
import { CgSpinner } from "react-icons/cg";
import Navbar from './Navbar';

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
    <div>
      {isLoading? (
        
        <div className='flex flex-col items-center justify-center h-screen'>
            <CgSpinner className=' w-14 p-2 h-14 animate-spin text-orange'/>
        </div>
        
      ):(
    <div>
      <Navbar/>
     <div className='h-screen mx-5  md:mx-auto md:container mt-9'>
     <div className='md:flex md:flex-row  animate__animated animate__fadeInUp animate__slow items-center'>
       <img src={item?.strMealThumb} className='mb-6 rounded-lg mx-auto h-[200px] lg:h-[350px]' alt="" />
      <div className='flex flex-col md:me-8 '>
        <h1 className='text-2xl font-semibold text-brown mb-3 tracking-wide'>{item?.strMeal}</h1>
        <h1 className="text-xl font-semibold text-brown opacity-80 mb-[14px] tracking-wide">{item?.strArea}</h1>
        <h1 className=' py-1 text-xs rounded-full text-center w-24 mb-3 bg-brown text-orange font-bold '>{item?.strCategory}</h1>
        <div className="flex ">
        
        <button onClick={openYoutubeLink} className="flex mb-2 text-xs border-2 border-brown px-3 items-center rounded-full text-brown"> Watch On
             <BsYoutube className='ms-4 text-red-600 text-3xl' />
          </button>
        </div>
        <p className='text-brown md:w-[600px] h-auto  overflow-scroll md:h-[320px] text-xs md:text-sm tracking-wide leading-7'>{item.strInstructions}</p>

      </div>
    </div>
    </div>
    </div>

    )}
    </div>
  );
};

export default Detail;
