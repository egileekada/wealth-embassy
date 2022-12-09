import React from "react";

const FormComponent = () => {
  return (
    <div className="items-center justify-center w-full flex flex-col mt-20">
      <p className="font-Poppins-Medium text-[40px]">
        CALL US OR FILL THE FORM
      </p>
      <p className="text-[16px] font-Poppins-Medium text-center w-[400px]">
        We’d love to hear from you! Feel free to send us any questions you may
        have. We are happy to answer them.
      </p>
      <form
        style={{ boxShadow: "0px 13px 26px 5px #00000040" }}
        className=" w-fit p-10 mt-10"
      >
        <div className="grid grid-cols-2 w-fit gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="w-[350px] h-[45px] border pl-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[350px] h-[45px] border pl-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[350px] h-[45px] border pl-4 mt-5"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-[350px] h-[45px] border pl-4 mt-5"
          />
        </div>
        <textarea
          className=" w-full h-[150px] p-4 border mt-5"
          placeholder="Your Message"
        ></textarea>
        <button className="w-full text-white bg-[#EAA904] h-[45px] mt-3">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
