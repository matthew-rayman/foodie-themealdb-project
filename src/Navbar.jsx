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
    <div className=' border-b bg-[#23180d] items-center md:p-5 p-2 w-[100%] md:px-0 px-14  animate__animated animate__fadeInDown animate__slow  sticky top-0 z-50'>
      
        <div className='md:flex justify-center  md:justify-evenly  items-center '>
          <Link to={'/'}>
            <div className='hover:scale-105 bg-transparent transition duration-200  '>
              <div className='flex justify-center items-center '>
              <GiKnifeFork className=' text-orange me-1 font-bold text-3xl md:text-5xl'/>
              <p className=' text-sm md:text-2xl text-orange font-semibold tracking-wider'> Foodie <span className=' text-sm md:text-2xl text-[#fbd6ab] '>|</span> Enjoy Your Meals</p>
              </div>
            </div>
          </Link>
          <div className=' flex flex-row justify-center md:mt-0 mt-2 md:mb-0 mb-1 items-center gap-5'>
           <form  onSubmit={submitHandler}>
            <input value={search} 
                    onChange={(e) => setSearch(e.target.value)}  
                    type="text"
                    placeholder='Search'
                    className=' text-center hover:scale-105 transition duration-200 bg-white border rounded outline-none w-28 pb-[2px] h-7   md:w-40 md:h-10 ' />
           </form>
           <Link to={`/`}>
           <button className='hover:scale-105 transition duration-200 md:w-20 md:h-9 mt-1 bg-[#c52d2f] w-14 h-7 pb-1 md:pb-[3px] rounded text-white'>Home</button>
           </Link>
          </div>
         
        </div>
        
    </div>
  )
}

export default Navbar
