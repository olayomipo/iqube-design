

function PurchaseComplete(){
    return (
        <div className="flex items-center justify-center ">
            <div className="w-80 h-100 md:w-[800px] md:h-[480px] sm:h-[480px] sm:w-[800px] bg-white shadow-custom rounded-lg">
              <div className="flex items-center justify-center flex-col h-full w-full">
                <div className="">
                  <div className="mt-20 w-[77px] h-[77px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] lg:w-[84px] lg:h-[84px] bg-transparent flex rounded-full shadow-custom overflow-hidden items-center justify-center">
                    <div className="w-[58px] h-[58px] sm:w-[32px] sm:h-[32px] md:w-[52px] md:h-[52px] lg:w-[72px] lg:h-[72px]">
                      <img src="src/assets/noun_tick_953515 2.png" alt="noun_tick" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="product-sans space-y-7 p-4  items-center justify-center md:ml-[8rem] md:mt-">
                  <h2 className="text-3xl text-heading-2 font-bold text-left text-[#4E598C] leading-tight">
                    Purchase Completed
                  </h2>
                  <div className="max-w-[404px] max-h-[60px] text-[#4F4F4F] text-[20px] leading-[30px]">
                    <p className="font-normal text-left">
                    Please check your email for details concerning this transaction
                    </p>
                  </div>  
                  <p className=" text-sm text-[#F2C94C] underline  mt-2">
                      Return Home
                  </p> 
                </div>
              </div>
            </div>
        </div> 
    );
  };
  
  
  
  export default PurchaseComplete;