import React from 'react'
import backgroundImage from "../../assets/images/Background Image.png";
import dove from "../../assets/images/dove 1.png"; 
import UpcomingEvents from '../../pages/HomePage/components/UpcomingEvents';
import Navbar from '../Navbar';

export default function Index(props: any) {
    return ( 
        <div className="relative h-screen mb-40">
            <Navbar />
            <img
                src={backgroundImage}
                alt="backgroundImage"
                className=" w-full flex flex-col h-full justify-center items-center"
            />
            <div className="absolute flex h-screen items-center justify-center flex-col inset-0 ">
                <div>
                <img src={dove} alt="dove" className="my-4" />
                </div>
                <div>
                <h3 className="text-white font-Poppins-Medium">
                    WE HELP YOU GET THINGS DONE
                </h3>
                </div>
                <div className=" py-1 " >
                <h1 className="text-white font-Poppins-Bold text-6xl"> 
                    {props.title}
                </h1>
                </div>
                <div>
                    <p className="text-white font-Poppins-Regular leading-6">
                        Jesus is holy, loving, and worthy of all our worship and devotion.
                        <br />
                        You will feel heaven with us. Join us and praise the Lord Jesus.
                    </p>
                </div>
                <div>
                    <button
                        className="text-white h-[45px] mt-10 px-8 rounded font-Poppins-Regular font-thin "
                        style={{ backgroundColor: "#B83A3A" }}
                    >
                        View Sermons
                    </button>
                </div>
            </div>
            <UpcomingEvents />
        </div>
    )
} 