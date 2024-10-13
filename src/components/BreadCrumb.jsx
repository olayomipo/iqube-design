import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import SlashImg from "./assets/slash.png";

function BreadCrumb() {
  const location = useLocation();
  console.log(location.pathname);

  const base = '/purchase'

  return (
    <div className="ml-[-1rem] w-[100%] ">
      <ul className="border border-transparent text-[#bdbdbd] cursor-pointer text-left items-start">
        <div className="grid md:grid-cols-3 grid-cols-3 font-bold xs:text-[18px] sm:text-[20px] md:text-[22px] text-[18px] leading-[34px]">
          <Link to={base} className={`col-span-1 hover:text-[#F2994A] p-4 ${location.pathname === base && 'text-[#F2994A]' } `}>
            Personal Info
          </Link>
          <Link to={base+'/billings'} className={`col-span-1 hover:text-[#F2994A] p-4 ${location.pathname === base+'/billings' && 'text-[#F2994A]'} `}>
            Billing Info
          </Link>
          <Link to={base+'/confirm'} className={`col-span-1 hover:text-[#F2994A] p-4 ${location.pathname === base+'/confirm' && 'text-[#F2994A]' } `}>
            Confirm Payment
          </Link>          
        </div>
      </ul>
    </div>
  );
}

export default BreadCrumb;