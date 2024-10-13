import React from 'react';


function BillingInfo() {
  return (
    <div className="flex items-center justify-center">
    <div className="mx-auto w-full max-w-full">
        <form action="" method="POST">
        <div className="mb-5">
            <label
            htmlFor="nameOnCard"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Name on Card <span className='text-[#EB5757]'>*</span>
            </label>
            <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            placeholder="Opara Linus Ahmed"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md"
            required
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="cardType"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Card Type <span className='text-[#EB5757]'>*</span>
            </label>
            <select id="cardType" 
              required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md">
                  <option selected>Visa</option>
                  <option value="MC"> MasterCard </option>
                  <option value="V"> Verve </option>
                  <option value="AE"> American Express </option>
                  <option value="OT">Other</option>
            </select>
        </div>

        <div className="grid md:grid-cols-5 md:gap-6 mb-5">
                <div className="relative z-0 w-full mb-5 group col-span-3">
                    <label htmlFor="card_details" 
                      className="mb-3 block text-base font-medium text-[#07074D]">
                      Card details <span className='text-[#EB5757]'>*</span>
                    </label>
                    <input 
                    type="text" 
                    name="card_details" id="card_details" 
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md" 
                    placeholder="44960 44960 44960 44960" 
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    required />
                </div>
                <div className="relative z-0 w-full mb-5 group col-span-1">
                  <label htmlFor="exdate" 
                  class="mb-3 block text-base font-medium text-[#07074D]">
                      Expiry date <span className='text-[#EB5757]'>*</span>
                      </label>
                  <input 
                    type="text" 
                    name="exdate" id="exdate" 
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md" 
                    placeholder="11 / 25" required />
                </div>
                <div className="relative z-0 w-full mb-5 group col-span-1">
                  <label htmlFor="cvv" 
                  class="mb-3 block text-base font-medium text-[#07074D]">
                      CVV <span className='text-[#EB5757]'>*</span>
                    </label>
                  <input 
                    type="text" 
                    name="cvv" id="cvv" 
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#4F4F4F] outline-none focus:border-[#4E598C] focus:shadow-md" 
                    placeholder="923" required />
                </div>
            </div>
        <div>
        <div className="grid md:grid-cols-3 grid-cols-3 w-2/3 md:gap-6 mb-5">
            <button
            className="hover:shadow-form rounded-md bg-gradient-to-b from-[#F2C94C] to-[#F2994A] py-2 px-12 lg:px-24 text-base font-semibold text-white outline-none"
            >
              Next
            </button>
            <button
            className="hover:shadow-form rounded-md bg-transparent text-[#4E598C] py-2 px-12 lg:px-18 text-base font-semibold outline-none col-span-2"
            >
              Cancel Payment
            </button>
        </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default BillingInfo
