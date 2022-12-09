import React from 'react'
import Photo from "../../../assets/images/pngwing.png"

export default function Schedules() {
    return (
        <div className=' w-full relative py-20 hidden lg:flex items-center flex-col ' >
            <img src={Photo} alt="photo" className=" absolute left-0 lg:flex hidden -z-10 top-0 " />
            <p className=' font-Poppins-SemiBold text-[40px] text-center ' >CHURCH SCHEDULES</p>
            <div className=' mt-4 w-[888px] py-4 border-t border-[#000] relative z-20 ' >
                <div style={{boxShadow: "4px 4px 10px 0px #00000040"}} className=' w-full my-8 font-Poppins-Regular bg-white rounded-full flex items-center h-[55px] ' >
                    <div className=' w-[170px] h-full flex justify-center items-center border-r  border-[#000] ' >
                        5:00 PM
                    </div>
                    <p className=' mx-auto font-Poppins-SemiBold text-2xl ' >Bible Study</p>
                    <div className=' w-[170px] flex justify-center items-center h-full border-l  border-[#000] ' >
                        Tuesday
                    </div>
                </div>
                <div style={{boxShadow: "4px 4px 10px 0px #00000040"}} className=' w-full my-8 font-Poppins-Regular bg-white rounded-full flex items-center h-[45px] ' >
                    <div className=' w-[170px] h-[45px] flex justify-center items-center border-r  border-[#000] ' >
                        5:00 PM
                    </div>
                    <p className=' mx-auto font-Poppins-SemiBold text-2xl ' >Bible Study</p>
                    <div className=' w-[170px] flex justify-center items-center h-[45px] border-l  border-[#000] ' >
                        Tuesday
                    </div>
                </div>
                <div style={{boxShadow: "4px 4px 10px 0px #00000040"}} className=' w-full my-8 font-Poppins-Regular bg-white rounded-full flex items-center h-[45px] ' >
                    <div className=' w-[170px] h-[45px] flex justify-center items-center border-r  border-[#000] ' >
                        5:00 PM
                    </div>
                    <p className=' mx-auto font-Poppins-SemiBold text-2xl ' >Bible Study</p>
                    <div className=' w-[170px] flex justify-center items-center h-[45px] border-l  border-[#000] ' >
                        Tuesday
                    </div>
                </div>
                <div style={{boxShadow: "4px 4px 10px 0px #00000040"}} className=' w-full my-8 font-Poppins-Regular bg-white rounded-full flex items-center h-[45px] ' >
                    <div className=' w-[170px] h-[45px] flex justify-center items-center border-r  border-[#000] ' >
                        5:00 PM
                    </div>
                    <p className=' mx-auto font-Poppins-SemiBold text-2xl ' >Bible Study</p>
                    <div className=' w-[170px] flex justify-center items-center h-[45px] border-l  border-[#000] ' >
                        Tuesday
                    </div>
                </div>
            </div>
        </div>
    )
} 