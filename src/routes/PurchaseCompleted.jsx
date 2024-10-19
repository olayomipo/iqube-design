
import { Link } from 'react-router-dom';
import Check from '../assets/noun_tick_953515 2.png'

function PurchaseComplete(){
    return (
        <div className="h-screen min-h-screen flex items-center justify-center ">
                    {/* Media queries should be looked into , Room for improvement */}
                    {/* A href with clickable icon on the right top corner should be finished */}
            {/* <a href="#" className="bg-transperent inline-block ">
              <img src="src/assets/Vector.png" alt="Icon" className="w-[12px] h-[8.5px] rounded-full hover:shadow-md transition duration-300 ease-in-out" />
            </a> */}
            <div className="p-12 py-24 bg-white shadow-custom rounded-lg max-w-[801px] w-[80%]">
              <div className="flex items-center justify-center flex-col h-full w-full">
                <div className="">
                  <div className="mt-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] lg:w-[84px] lg:h-[84px] bg-transparent flex rounded-full shadow-custom overflow-hidden items-center justify-center">
                    <div className="w-[45px] h-[45px] sm:w-[30px] sm:h-[30px] md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px]">
                      <img src={Check} alt="noun_tick" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="space-y-7 p-4  items-center justify-center md:ml-[8px] lg:ml-[-3] ">
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-3xl text-heading-2 font-bold text-left text-[#4E598C] leading-tight">
                    Purchase Completed
                  </h1>
                  <div className="max-w-[404px] max-h-[60px] text-[#4F4F4F] text-[16px] md:text-[18px] sm:text-[14px] lg:text-[20px] leading-[30px] xs:text-[12px]">
                    <p className="font-normal text-left">
                      Please check your email for details concerning this transaction
                    </p>
                  </div>  
                  <p className=" text-base font-normal text-[#F2C94C] underline mt-8 lg:mt-2 md:mt-8 sm:mt-10">
                    <Link to='..'> Return Home  </Link>
                  </p> 
                </div>
              </div>
            </div>
        </div> 
    );
  };
  
  
  
  export default PurchaseComplete;