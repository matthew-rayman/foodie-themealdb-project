import { useState } from 'react';
import {GiKnifeFork} from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css'

const Navbar = () => {
  const [search,setSearch] = useState("");
  const nav = useNavigate();
 
  const submitHandler = e =>{
    e.preventDefault();
    nav(`/search/` + search );
    setSearch("");
   }
  
  return (
    <div className=' bg-gray-50 items-center p-2 w-[100%] md:px-0 px-14 rounded-lg animate__animated animate__fadeInDown animate__slow shadow-lg sticky top-0 z-50'>
      <div className='flex justify-between md:justify-evenly items-center '>
          
          <Link to={'/'}>
            <div className='hover:scale-105 bg-transparent transition duration-200  '>
              <div className='flex text-center '>
              <GiKnifeFork className=' text-orange font-semibold text-3xl md:text-4xl'/>
              <p className=' text-2xl md:text-3xl text-brown font-semibold tracking-wider'>Foodie</p>
              </div>
              <p className=' text-sm md:text-lg text-secondary  tracking-wide'>Enjoy Your Meals</p>
            </div>
          </Link>
          
          <form  onSubmit={submitHandler}>
            <input value={search} 
                    onChange={(e) => setSearch(e.target.value)}  
                    type="text"
                    placeholder='Search'
                    className=' text-center outline-none bg-transparent border-b-orange border-b-4 md:w-[150px] w-28 mt-4 md:mt-0  md:h-14' />
          </form>
        </div>
    </div>
  )
}

export default Navbar
