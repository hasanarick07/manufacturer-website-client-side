import React from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const submitButton = e => {
    toast.success("Thank You For Contact with US");
    e.target.reset();
  };
  return (
    <div>
      <div class=" body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Contact Us
            </h1>
           
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={submitButton} class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    class="w-full  bg-opacity-50 rounded border  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    class="w-full  bg-opacity-50 rounded border  focus:ring-2 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    name="message"
                    class="w-full  bg-opacity-50 rounded border    focus:ring-2  h-32  outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto btn btn-primary btn-wide sm-w-sm md-w-md lg-w-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
