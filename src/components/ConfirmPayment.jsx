import React from 'react';
import { Link } from 'react-router-dom';
import Naira from '../assets/Naira.png';

function ConfirmPayment() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-[701px] flex-row">
        {/* <div className="shadow-custom rounded-lg bg-green-400 m-1 mb-16">
          <div className="px-6 py-4 rounded grid md:grid-cols-2 grid-cols-2 h-16 justify-center items-center text-center bg-[#2F80ED] text-white">
            <p className='p-2'>Item Name</p>
            <div className="flex p-2 items-center justify-center">
              <span className="flex w-12 h-8 gap-2">
                  <img src={Naira} alt="N" className="self-center rounded-full mt-[10px]" />
                  <p>Price</p>
              </span>              
            </div>

          </div>
          <div className="px-6 py-4">
            <div className="p-2 grid grid-cols-2 justify-center items-baseline text-baseline">
              <p>Data science and usability</p>
              <p>50,000.00</p>
            </div>
            <div className="p-2 grid grid-cols-2 justify-center items-baseline text-baseline">
              <p>Data science and usability</p>
              <p>50</p>
            </div>

            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
          </div>

        </div> */}
        {/* <div className="">
            <div className="">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className=" ">Original price</dt>
                    <dd className=" ">$6,592.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className=" ">Savings</dt>
                    <dd className=" text-green-500">-$299.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className=" ">Store Pickup</dt>
                    <dd className=" ">$99</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className=" ">Tax</dt>
                    <dd className=" ">$799</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bolm ">Total</dt>
                  <dd className="text-base font-bolm ">$7,191.00</dd>
                </dl>
            </div>
          </div>
        </div> */}

        <div className="shadow-custom mb-10 rounded border bg-white font-normal text-base">
          <div className="space-y-4 px-4 bg-[#2F80ED] rounded-t-md">
            <div className="space-y-2 text-white mb-5 ">
                <dl className="flex items-center justify-between gap-4 ">
                    <dt className="p-2">Item Name</dt>
                      <dd className="flex p-2 " style={{ marginTop: '10px'}}>
                        <img src={Naira} alt="N" className="h-8 self-center rounded-full mt-[1px]" />
                        <p className="mr-[4rem] ">Price</p>
                      </dd>  
                </dl>
              </div>
            </div>

            <div className="space-y-4 px-6 py-4">
                  <div className="space-y-2 text-[#4E598C] mb-8">
                    <dl className="flex items-center justify-between gap-4 mb-8">
                      <dt className=" ">Data science and usability</dt>
                      <dd className="mr-12">50,000.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 mb-8">
                      <dt className=" ">Shipping</dt>
                      <dd className=" mr-12">0.00</dd>
                    </dl>

                    {/* <dl className="flex items-center justify-between gap-4">
                      <dt className=" ">Store Pickup</dt>
                      <dd className=" mr-12  ">$99</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className=" ">Tax</dt>
                      <dd className=" mr-12  ">$799</dd>
                    </dl> */}

                  </div>

                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-[#817E9E] " />

                  <div className="mb-8" style={{ marginTop: '2rem'}}>
                    <dl className="flex items-center justify-between gap-4 border border-[#817E9E] p-2 mb-10">
                      <dt className="text-base font-bolm ">Total</dt>
                      <dd className=" mr-12 text-base font-bolm ">50,000.00</dd>
                    </dl>                    
                  </div>

            </div>          
        </div>


          <div className="grid md:grid-cols-3 grid-cols-3 md:w-2/3 md:gap-6 mb-8">
                <button
                className="hover:shadow-form rounded-md bg-gradient-to-b from-[#F2C94C] to-[#F2994A] py-2 md:px-12 lg:px-18 text-base font-semibold text-white outline-none"
                >
                  
                  <Link to='/complete'> Pay </Link>
                </button>
                <button
                className="hover:shadow-form rounded-md bg-transparent text-[#4E598C] py-2 md:px-12 lg:px-18 text-base font-semibold outline-none col-span-2"
                >
                  <Link to='..'> Cancel Payment </Link>
                </button>
            </div>
          </div>
      </div>
  )
}

export default ConfirmPayment
