

// this should contain a jsx element that has the the name of the design section alongside the hyperlink to said design
// it should be some kind of rectangular grid 

import React from 'react';
import { Link } from 'react-router-dom';


function LinkBox() {
  return (
    <div className="h-screen min-h-screen flex items-center justify-center text-black ">
        <div className="grid grid-rows-2  lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl text-3xl text-heading-2 font-bold text-left leading-tight text-[#4E598C]">
            <h1 className='p-4'> Click either of the link to see the design </h1>
            <h1 className="hover:text-[#F2C94C] p-4 cursor-pointer">
                <Link to='/purchase'> Purchase  </Link>
            </h1>    
            <h1 className="hover:text-[#F2C94C] p-4 cursor-pointer">
                <Link to='/complete'> Complete </Link>
            </h1>
            <h1 className="hover:text-red-500 text-blue-500 p-4 cursor-pointer mt-2">
                <Link to='https://github.com/olayomipo/iqube-design'> Github </Link>
            </h1>
        </div>

    </div>
  )
}

export default LinkBox
