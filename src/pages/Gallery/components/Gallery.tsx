import React from "react";
import One from "../../../assets/images/Gallery/1.png"
import Two from "../../../assets/images/Gallery/2.png"
import Three from "../../../assets/images/Gallery/3.png"
import Four from "../../../assets/images/Gallery/4.png"
import Five from "../../../assets/images/Gallery/5.png"
import Six from "../../../assets/images/Gallery/6.png"

const Gallery = () => {
  
  const Images = [
    {
      name: "",
      image: One
    },
    {
      name: "",
      image: Two
    },
    {
      name: "",
      image: Three
    },
    {
      name: "",
      image: Four
    },
    {
      name: "",
      image: Five
    },
    {
      name: "",
      image: Six
    },
  ]

  return (
    <div className="items-center justify-center w-full lg:px-20 font-Poppins-ExtraBold"> 
      <div className='container w-screen pb-10 lg:flex hidden ' >
        {/* <LatestWork /> */}
        {Images.map((item: any, index: any) => {
          return( 
            <figure key={index} >
                <img src={item.image} id='img' alt={index} />
                {/* <figcaption><a href="#">1</a></figcaption> */}
            </figure> 
          )
        })}
      </div>  
      <div className=' w-full lg:hidden px-4 pb-10 ' >
        {/* <LatestWork /> */}
        {Images.map((item: any, index: any) => {
          return( 
            <figure key={index} >
                <img src={item.image} id='img' alt={index} />
                {/* <figcaption><a href="#">1</a></figcaption> */}
            </figure> 
          )
        })}
      </div>  
    </div>
  );
};

export default Gallery;
