import React from 'react' 
import NavbarAdmin from '../components/NavbarAdmin'
import AddEvent from '../components/AddEvent'
import AddSermon from '../components/AddSermon'
import AddStreamLink from '../components/AddStreamLink'

export default function Dashboard() {
    return ( 
        <>
            <AddEvent />
            <AddSermon />
            <AddStreamLink />
        </> 
    )
} 