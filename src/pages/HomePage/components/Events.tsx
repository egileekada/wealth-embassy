import React from "react";
import flier1 from "../../../assets/images/Rectangle 12 (1).png";
import Date28 from "../../../assets/images/Date.png";
import flier2 from "../../../assets/images/Rectangle 12 (2).png";
import Date20 from "../../../assets/images/Date (1).png";

const Events = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-500">
      <div className="">
        <h1 className="text-white font-Poppins-SemiBold">UPCOMING EVENTS</h1>
        <p className="text-white font-Poppins-Regular font-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus nulla
          praesent sem
          <br /> morbi risus at. At etiam molestie vel cras. Mattis lectus lorem
          turpis tincidunt. Amet a.
        </p>
      </div>
      <div className="flex">
        <div className="w-[546px] h-[425px] bg-white">
          <img src={Date28} alt="date" />
          <img src={flier1} alt="date" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              <br /> laoreet a sit habitasse maecenas nec scelerisque. Consequat
              tempor.
            </p>
            <br />
            <p className="font-[12px] font-Poppins-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              nisl et ultricies ullamcorper pretium faucibus dictum. Convallis
              nullam ultricies
              <br /> ultrices faucibus. Sit
              <br /> pellentesque amet ut odio nam sit id turpis sed. Aliquet
              ipsum tellus lacus risus, arcu
              <br />
              tristique id sit a.
              <br /> Bibendum amet in aenean lacus, quis viverra mus. Cursus
              pulvinar aliquet dui enim
              <br /> eget sem at sed. Faucibus at in congue aliquam. Tortor,
              cras dignissim integer egestas
              <br /> nam eu. Mollis bibendum pharetra condimentum iaculis enim
              neque eu tincidunt.{" "}
            </p>
          </div>
        </div>
        <div className="w-[546px] h-[425px] bg-white mx-5 relative">
          <img src={Date20} alt="" className="absolute" />
          <img src={flier2} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              <br /> laoreet a sit habitasse maecenas nec scelerisque. Consequat
              tempor.
            </p>
            <br />
            <p className="font-[12px] font-Poppins-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              nisl et ultricies ullamcorper pretium faucibus dictum. Convallis
              nullam ultricies
              <br /> ultrices faucibus. Sit
              <br /> pellentesque amet ut odio nam sit id turpis sed. Aliquet
              ipsum tellus lacus risus, arcu
              <br />
              tristique id sit a.
              <br /> Bibendum amet in aenean lacus, quis viverra mus. Cursus
              pulvinar aliquet dui enim
              <br /> eget sem at sed. Faucibus at in congue aliquam. Tortor,
              cras dignissim integer egestas
              <br /> nam eu. Mollis bibendum pharetra condimentum iaculis enim
              neque eu tincidunt.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
