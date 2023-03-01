import React from 'react'
import NavbarAdmin from '../../admin/components/NavbarAdmin'
import { Outlet } from 'react-router-dom'

export default function Index() {
    return (
        <div className=' w-screen h-screen overflow-x-hidden p-[70px] bg-[#B5BFC9] ' >
            <NavbarAdmin /> 
            <div className=' w-full pt-12 h-auto bg-[#B5BFC9]  ' >
                <Outlet />
            </div>
        </div>
    )
} 