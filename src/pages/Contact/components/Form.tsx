import React from "react";

const Form = () => {
  return (
    <div className="items-center justify-center ml-24 mt-20">
      <p>CALL US OR FILL THE FORM</p>
      <p>
        We’d love to hear from you! Feel free to send us any questions you may
        have. We are happy to answer them.
      </p>
      <form>
        <div className="flex flex-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <button>Contact Us</button>
      </form>
    </div>
  );
};

export default Form;
