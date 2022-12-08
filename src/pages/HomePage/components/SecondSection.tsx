import React from 'react'
import Image from "../../../assets/images/SecondImage.png"

export default function SecondSection() {
    return (
        <div className=' w-full flex justify-center pb-20 bg-white items-center ' >
            <div className=' w-full flex justify-center px-4 ' > 
                <img className=' max-w-[576px] ' src={Image} alt="SecondImage" />
            </div>
            <div className=' w-full flex flex-col pl-10 px-4 ' >
                <div className=' max-w-[521px] ' >
                    <p className="text-black my-4 text-[20px] font-Poppins-Medium">
                        Our
                        <span className="bg-[#FF8049] ml-2"> Believe.</span>
                    </p>
                    <p className=' text-xl font-Poppins-Regular ' >There is only one God and creator of the world. Who created created the 
                        universe i nthe person of the trinity (Father, Son, and the Holy Spirit).</p>
                    <p className=' font-Poppins-Regular mt-6 text-xs max-w-[638px] ' >Our Vision -
                        To wipe humanity’s tears by reaching their physical, social, and spiritual needs via the gospel and power of God.</p>
                    <button className=' bg-[#FF8049] font-Poppins-SemiBold w-[130px] h-[40px] rounded mt-6 ' >ABOUT US</button>
                </div> 
            </div>
        </div> 
    )
} 