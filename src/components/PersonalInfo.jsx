import React from 'react'
import { Link } from 'react-router-dom';

function PersonalInfo() {
  return (
    <div className="flex items-center justify-center">
    <div className="mx-auto w-full max-w-full">
        <form action="" method="POST">
        <div className="mb-5">
            <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Name
            </label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Opara Linus Ahmed"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Email Address <span className='text-[#EB5757]'>*</span>
            </label>
            <p className='font-normal p-4 ml-[-1rem] text-[16px] text-[#817E9E'>The purchase reciept would be sent to this address</p>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="OparaLinusAhmed@devmail.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="address1"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Address 1
            </label>

            <input
            type="text"
            name="address1"
            id="address1"
            placeholder="Address 1"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md"
            />
        </div>        
        <div className="mb-5">
            <label
            htmlFor="address2"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Address 2
            </label>
            <input
            type="text"
            name="address2"
            id="address2"
            placeholder="Address 2"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md"
            />
        </div>
        <div className="grid md:grid-cols-3 md:gap-6 mb-5">
                <div className="relative z-0 w-full mb-5 group col-span-2">
                    <label htmlFor="local_government" 
                      className="mb-3 block text-base font-medium text-[#07074D]">
                        Local Government
                    </label>
                    <input 
                    type="text" 
                    name="local_government" id="local_government" 
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md" 
                    placeholder="Surulere" required />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="states" 
                  class="mb-3 block text-base font-medium text-[#07074D]">
                    State
                  </label>
                  <select id="states" 
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md">
                    <option selected>Lagos</option>
                    <option value="AB"> Abuja </option>
                    <option value="OG"> Ogun </option>
                    <option value="IB"> Ibadan </option>
                    <option value="PH">Port Harcourt</option>
                  </select>
                </div>
            </div>
        <div>
        <div className="grid md:grid-cols-3 grid-cols-3 md:w-2/3 md:gap-6 mb-8">
            
            <button
              className="hover:shadow-form rounded-md bg-gradient-to-b from-[#F2C94C] to-[#F2994A] py-2 md:px-12 lg:px-18 text-base font-semibold text-white outline-none"
              >
                Next 
              </button>
            <button
            className="hover:shadow-form rounded-md bg-transparent text-[#4E598C] py-2 md:px-12 lg:px-18 text-base font-semibold outline-none col-span-2"
            >
              <Link to='..'> Cancel Payment </Link>
            </button>
        </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default PersonalInfo;
