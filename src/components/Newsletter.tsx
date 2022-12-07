import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#B83A3A] flex text-white font-Poppins-Regular text-sm text-center py-8 items-stretch">
      <p className="text-[32px] font-Poppins-SemiBold pl-40 pr-5">
        Newsletter Sign Up
      </p>
      <input
        type="email"
        placeholder="Enter your email address"
        className="p-2"
      />
    </div>
  );
};

export default Newsletter;
