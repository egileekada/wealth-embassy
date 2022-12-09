import React from "react";
import sermonBg from "../../../assets/images/Rectangle 16.png";
import FaceBook from "../../../assets/images/icon/facebook.svg";
import Instagram from "../../../assets/images/icon/instagram.svg";
import Twitter from "../../../assets/images/icon/twitter.svg";
import { useNavigate } from "react-router-dom";

const Sermons = () => {

  const Information = [
    {
      name: "Sermon First"
    },
    {
      name: "Sermon second"
    },
    {
      name: "Sermon Third"
    },
    {
      name: "Sermon Fourth"
    },
    {
      name: "Sermon Fifth"
    },
    {
      name: "Sermon Sixth"
    },
  ]

  const navigate = useNavigate()

  return (
    <div>
      <div className="items-center justify-center flex text-center font-Poppins-SemiBold text-[48px]">
        Sermons
      </div>
      <div className=" w-full flex flex-col items-center mt-10 " > 
        <div className=" max-w-[1200px] grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-12 gap-y-10 gap-6 " > 
          {Information.map((item: any, index: any) => {
            return( 
              <div className=" w-full " >
                <p className="font-Poppins-SemiBold text-2xl mb-2 " >{item?.name}</p>
                <img src={sermonBg} alt="background image" className="h-[200px] object-cover" />
                <p className=" font-Poppins-Regular text-sm mt-4 " >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  facilisis sem faucibus aenean arcu fames. Posuere diam maecenas dis
                  sed amet eu augue cum. Elit sit.
                </p>
                <div className=" mt-3 pt-3 border-t w-full flex justify-between border-black " >
                  <button onClick={()=> navigate("/sermondetail")} className=" font-Poppins-Bold text-sm " >Read more</button>
                  <div className=" flex items-center " >
                    <div className=" w-[26px] h-[26px] mx-1 flex justify-center items-center rounded-full bg-[#D9D9D9] " >
                      <img src={FaceBook} className="w-[8px]" />
                    </div>
                    <div className=" w-[26px] h-[26px] mx-1 flex justify-center items-center rounded-full bg-[#D9D9D9] " >
                      <img src={Twitter} className="w-[14px]" />
                    </div>
                    <div className=" w-[26px] h-[26px] mx-1 flex justify-center items-center rounded-full bg-[#D9D9D9] " >
                      <img src={Instagram} className="w-[14px]" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
