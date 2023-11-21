import {BiSearch} from 'react-icons/bi';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({name,image,id}) => {
    
  return (
    <div className='relative parent h-[135px] w-[175px] md:w-[250px] justify-center md:h-[220px] mb-8 '>
      <Link to={`/detail/${id}`}>
        <img className='image h-[145px] w-[175px] md:h-[210px] md:w-[230px] object-cover rounded-lg' src={image} alt="" />
        <p className=' icon bg-orange flex align-middle items-center justify-center h-9 w-9 md:h-12 md:w-12 rounded-[100%] absolute top-[30%] md:top-[40%] left-[37%]'>
          <BiSearch className='text-3xl text-white'/>
        </p>
        <p className="text-yellow opacity-90 text-xs font-medium md:text-base md:font-medium mt-1 text-center">{name.substring(0,20)}{name.length>20? "..." :""}</p>
      </Link>
    </div>
  )
}

export default Cards
