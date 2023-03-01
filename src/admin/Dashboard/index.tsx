import React from 'react' 
import NavbarAdmin from '../components/NavbarAdmin'
import AddEvent from '../components/AddEvent'
import AddSermon from '../components/AddSermon'

export default function Dashboard() {
    return ( 
        <>
            <AddEvent />
            <AddSermon />
        </> 
    )
} 