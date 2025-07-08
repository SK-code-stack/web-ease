import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-dvh pt-20 pb-10 bg-mylight dark:bg-mydark transition-colors duration-300 text-center">
      <h1 className="text-2xl font-bold font-myfont text-mydark dark:text-mylight mb-8">
        Contact Us
      </h1>

      <div className="w-full flex justify-center ">
        <form className="w-4/5 max-w-2xl bg-mylight dark:bg-mydark  text-mydark dark:text-mylight rounded-xl  p-6 space-y-6 shadow-upper dark:shadow-dupper transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:space-x-4 transition-all duration-300">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <label className="block text-left text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-all duration-300">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md  bg-mylight dark:bg-mydark shadow-upper  dark:shadow-dupper dark:text-white focus:outline-none focus:ring-2 focus:ring-mylight dark:focus:ring-mydark transition-all duration-300"
                placeholder="Salman"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-left text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-all duration-300">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md  bg-mylight dark:bg-mydark shadow-upper  dark:shadow-dupper  dark:text-white focus:outline-none focus:ring-2 focus:ring-mylight dark:focus:ring-mydark transition-all duration-300"
                placeholder="Khan"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-all duration-300">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-md  bg-mylight dark:bg-mydark shadow-upper  dark:shadow-dupper dark:text-white focus:outline-none focus:ring-2 focus:ring-mylight dark:focus:ring-mydark transition-all duration-300"
              placeholder="name@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-left text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-all duration-300">
              Message
            </label>
            <textarea
              rows="4" 
              className="w-full p-2 rounded-md  bg-mylight dark:bg-mydark shadow-upper  dark:shadow-dupper dark:text-white focus:outline-none focus:ring-2 focus:ring-mylight dark:focus:ring-mydark transition-all duration-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Buttons centered */}
          <div className="flex justify-center space-x-4">
            <button
              type="reset"
              className="px-6 py-2 bg-mylight dark:bg-mydark shadow-upper dark:shadow-dupper active:shadow-hov dark:active:shadow-dHov  rounded-md transition-all duration-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-mylight dark:bg-mydark shadow-upper dark:shadow-dupper active:shadow-hov dark:active:shadow-dHov  rounded-md transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
