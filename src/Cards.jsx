import {BiSearch} from 'react-icons/bi';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({name,image,id}) => {
    
  return (
    <div className='relative parent w-[250px] justify-center h-[260px] mb-8 '>
      <Link to={`/detail/${id}`}>
        <img className='image h-[250px] w-[230px] object-cover rounded-lg' src={image} alt="" />
        <p className=' icon bg-orange flex align-middle items-center justify-center h-12 w-12 rounded-[100%] absolute top-[40%] left-[37%]'>
          <BiSearch className='text-3xl text-white'/>
        </p>
        <p className="text-brown font-medium mt-1 text-center">{name.substring(0,20)}{name.length>20? "..." :""}</p>
      </Link>
    </div>
  )
}

export default Cards
