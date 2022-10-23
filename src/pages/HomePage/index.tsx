import React from 'react'
import GreenBg from "./components/GreenBg"

export default function Index() {
    return (
        <div className=' w-full flex flex-col h-full justify-center items-center ' > 
            <p className=' underline font-semibold text-4xl font-Poppins-ExtraBold ' >Halo</p> 
            <GreenBg />
        </div>
    )
}
