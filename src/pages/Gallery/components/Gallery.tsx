import React from "react";
import One from "../../../assets/images/Gallery/1.png"
import Two from "../../../assets/images/Gallery/2.png"
import Three from "../../../assets/images/Gallery/3.png"
import Four from "../../../assets/images/Gallery/4.png"
import Five from "../../../assets/images/Gallery/5.png"
import Six from "../../../assets/images/Gallery/6.png"
import { getData } from "../../../services";

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

  const [data, setData] = React.useState({} as any)  
  const [loading, setLoading] = React.useState(true)  
  React.useEffect(() => { 
    
    (async () => {
        try { 
        const response = await getData("gallery/photos"); 
          setData(response?.data);  
          setLoading(false)
          console.log(response?.data);
          
        } catch (err) {
          console.error("Error occured");
        } 
    })(); 
  }, []); 

  return (
    <>
      {!loading && ( 
        <div className="items-center justify-center w-full lg:px-20 font-Poppins-ExtraBold"> 
          <div className='container w-screen gap-4 lg:grid hidden grid-cols-4 pb-10 ' >
            {/* <LatestWork /> */}
            {data.map((item: any, index: any) => {
              return( 
                <figure key={index} >
                    <img src={item.photo} id='img' alt={index} />
                    {/* <figcaption><a href="#">1</a></figcaption> */}
                </figure> 
              )
            })}
          </div>  
          <div className=' w-full lg:hidden px-4 pb-10 ' >
            {/* <LatestWork /> */}
            {data.map((item: any, index: any) => {
              return( 
                <figure key={index} >
                    <img src={item.photo} id='img' alt={index} />
                    {/* <figcaption><a href="#">1</a></figcaption> */}
                </figure> 
              )
            })}
          </div>  
        </div>
      )}
    </>
  );
};

// pampay 9550095901 jenifer 3500

export default Gallery; 