import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-[#23180d] text-orange p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2023 Your Name. All rights reserved. | Database provided by{' '}
          <a
            href="https://www.themealdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.themealdb.com
          </a>
        </p>
      </div>
      <div>
      <div className='flex flex-row justify-center mt-5'>
        <a href="https://github.com/matthew-rayman">
           <FaGithub className=' text-2xl me-3 text-white '/>
        </a>
        <a href="mailto:maungyemamn@gmail.com">
        <FaMailBulk  className=' text-2xl me-3 text-white' />
        </a>
        <a href="https://www.facebook.com/raymansen.aries">
      <FaFacebook  className=' text-2xl me-3 text-white' />
        </a>

      </div>
      </div>
    </footer>
  );
};

export default Footer1;
