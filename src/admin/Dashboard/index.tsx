import React from 'react' 
import NavbarAdmin from '../components/NavbarAdmin'
import AddEvent from '../components/AddEvent'
import AddSermon from '../components/AddSermon'

export default function Dashboard() {
    return (
        <div className=' w-screen h-auto overflow-x-hidden p-[70px] bg-[#B5BFC9] ' >
            <NavbarAdmin />
            <AddEvent />
            <AddSermon />
        </div>
    )
} 