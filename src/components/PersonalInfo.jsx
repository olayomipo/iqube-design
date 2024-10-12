import React from 'react'

function PersonalInfo() {
  return (
    <div className="flex items-center justify-center">
    <div className="mx-auto w-full max-w-[550px]">
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
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Email Address
            </label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="address1"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Address1
            </label>
            <input
            type="text"
            name="address1"
            id="address1"
            placeholder="Address 1"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>        
        <div className="mb-5">
            <label
            htmlFor="address2"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Address2
            </label>
            <input
            type="text"
            name="address2"
            id="address2"
            placeholder="Address 2"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            Message
            </label>
            <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
        </div>
        
        <div>
            <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
            Submit
            </button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default PersonalInfo;
