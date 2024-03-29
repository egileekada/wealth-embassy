import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavbarAdmin() {

    const navigate = useNavigate()
    const location = useLocation();
    const [tab, setTab] =React.useState("home")

    React.useEffect(()=> {
        if(location.pathname === "/dashboard") {
            setTab("home")
        } else {
            setTab(location.pathname)
        }
    },[])

    const clickHandler =(item: any)=> {
        navigate(item)
        if(item === "/dashboard") {
            setTab("home")
        } else {
            setTab(item)
        }
    } 

    return (
        <div className=' w-full bg-white py-4 flex items-center justify-around ' >
            <button onClick={()=> clickHandler("/dashboard")} className={` flex px-3 text-sm py-2 items-center rounded-lg font-Poppins-Medium ${tab.includes("home") ? "bg-[#F7F8FC] text-[#0042F1]  ": " text-[#B5BFC9"} ` }>
                <svg className=' stroke-current mr-3 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5.59982" width="16" height="14.4" rx="1" stroke-width="1.2"/>
                    <path d="M8.79993 4V7.2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.2001 4V7.2" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 10.4002H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Event
            </button>
            <button onClick={()=> clickHandler("/dashboard/sermon")} className={` flex px-3 text-sm py-2 items-center rounded-lg font-Poppins-Medium ${tab.includes("sermon") ? "bg-[#F7F8FC] text-[#0042F1]  ": " text-[#B5BFC9"} ` }>
                <svg className=' stroke-current mr-3 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.077 14.4C18.8783 14.934 18.6173 15.4459 18.2975 15.9246C17.4877 17.1366 16.3367 18.0812 14.99 18.639C13.6434 19.1968 12.1616 19.3427 10.732 19.0583C9.30238 18.774 7.98922 18.0721 6.95854 17.0414C5.92786 16.0107 5.22596 14.6976 4.9416 13.268C4.65724 11.8384 4.80318 10.3566 5.36098 9.00995C5.91878 7.66331 6.86338 6.51232 8.07533 5.70252C8.55403 5.38267 9.06595 5.12171 9.59999 4.92303"  stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M15.0615 4.60896C14.3996 4.3348 13.7053 4.15137 12.9974 4.06242C12.4494 3.99356 12 4.44772 12 5L12 11C12 11.5523 12.4477 12 13 12L19 12C19.5523 12 20.0064 11.5506 19.9376 11.0026C19.8486 10.2947 19.6652 9.60043 19.391 8.93853C18.989 7.96793 18.3997 7.08602 17.6569 6.34315C16.914 5.60028 16.0321 5.011 15.0615 4.60896Z"  stroke-width="1.2" stroke-linejoin="round"/>
                </svg>
                Sermons
            </button>
            <button onClick={()=> clickHandler("/dashboard/gallery")} className={` flex px-3 text-sm py-2 items-center rounded-lg font-Poppins-Medium ${tab.includes("gallery") ? "bg-[#F7F8FC] text-[#0042F1]  ": " text-[#B5BFC9"} ` }>
                <svg className=' fill-current mr-3 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 19V12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19Z" fill="#B5BFC9"/>
                    <path d="M13 8V5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V8C20 8.55228 19.5523 9 19 9H14C13.4477 9 13 8.55228 13 8Z" fill="#B5BFC9"/>
                    <path d="M4 19V16C4 15.4477 4.44772 15 5 15H10C10.5523 15 11 15.4477 11 16V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19Z" fill="#B5BFC9"/>
                    <path d="M4 12V5C4 4.44772 4.44772 4 5 4H10C10.5523 4 11 4.44772 11 5V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12Z" fill="#B5BFC9"/>
                </svg>
                Gallery
            </button>
            <button className={` flex px-3 text-sm py-2 items-center rounded-lg font-Poppins-Medium ${tab.includes("profile") ? "bg-[#F7F8FC] text-[#0042F1]  ": " text-[#B5BFC9"} ` }>
                <svg className=' stroke-current mr-3 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20C20 18.4087 19.1571 16.8826 17.6569 15.7574C16.1566 14.6321 14.1217 14 12 14C9.87827 14 7.84344 14.6321 6.34315 15.7574C4.84286 16.8826 4 18.4087 4 20"  stroke-width="1.2"/>
                    <circle cx="12" cy="8" r="4"  stroke-width="1.2"/>
                </svg>
                Profile
            </button>
            <button className={` flex px-3 text-sm py-2 items-center rounded-lg font-Poppins-Medium ${" text-[#B5BFC9"} ` }>
                <svg className=' stroke-current mr-3 ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.3818 14.1818C17.285 14.4012 17.2561 14.6445 17.2989 14.8804C17.3417 15.1164 17.4542 15.3341 17.6218 15.5055L17.6655 15.5491C17.8007 15.6842 17.908 15.8446 17.9812 16.0212C18.0544 16.1978 18.0921 16.387 18.0921 16.5782C18.0921 16.7693 18.0544 16.9586 17.9812 17.1352C17.908 17.3118 17.8007 17.4722 17.6655 17.6073C17.5304 17.7425 17.3699 17.8498 17.1934 17.923C17.0168 17.9962 16.8275 18.0339 16.6364 18.0339C16.4452 18.0339 16.2559 17.9962 16.0794 17.923C15.9028 17.8498 15.7424 17.7425 15.6073 17.6073L15.5636 17.5636C15.3922 17.396 15.1745 17.2835 14.9386 17.2407C14.7027 17.1979 14.4594 17.2268 14.24 17.3236C14.0249 17.4158 13.8414 17.5689 13.7122 17.764C13.583 17.9591 13.5137 18.1878 13.5127 18.4218V18.5455C13.5127 18.9312 13.3595 19.3012 13.0867 19.574C12.8139 19.8468 12.444 20 12.0582 20C11.6724 20 11.3024 19.8468 11.0297 19.574C10.7569 19.3012 10.6036 18.9312 10.6036 18.5455V18.48C10.598 18.2393 10.5201 18.0058 10.38 17.81C10.2399 17.6141 10.0442 17.4649 9.81818 17.3818C9.59882 17.285 9.3555 17.2561 9.11957 17.2989C8.88365 17.3417 8.66595 17.4542 8.49455 17.6218L8.45091 17.6655C8.31582 17.8007 8.1554 17.908 7.97882 17.9812C7.80224 18.0544 7.61297 18.0921 7.42182 18.0921C7.23067 18.0921 7.04139 18.0544 6.86481 17.9812C6.68824 17.908 6.52782 17.8007 6.39273 17.6655C6.25749 17.5304 6.1502 17.3699 6.077 17.1934C6.00381 17.0168 5.96613 16.8275 5.96613 16.6364C5.96613 16.4452 6.00381 16.2559 6.077 16.0794C6.1502 15.9028 6.25749 15.7424 6.39273 15.6073L6.43636 15.5636C6.60403 15.3922 6.7165 15.1745 6.75928 14.9386C6.80205 14.7027 6.77317 14.4594 6.67636 14.24C6.58417 14.0249 6.43109 13.8414 6.23597 13.7122C6.04085 13.583 5.81221 13.5137 5.57818 13.5127H5.45455C5.06878 13.5127 4.69881 13.3595 4.42603 13.0867C4.15325 12.8139 4 12.444 4 12.0582C4 11.6724 4.15325 11.3024 4.42603 11.0297C4.69881 10.7569 5.06878 10.6036 5.45455 10.6036H5.52C5.76072 10.598 5.99419 10.5201 6.19004 10.38C6.38589 10.2399 6.53507 10.0442 6.61818 9.81818C6.71499 9.59882 6.74387 9.3555 6.70109 9.11957C6.65832 8.88365 6.54585 8.66595 6.37818 8.49455L6.33455 8.45091C6.19931 8.31582 6.09202 8.1554 6.01882 7.97882C5.94562 7.80224 5.90795 7.61297 5.90795 7.42182C5.90795 7.23067 5.94562 7.04139 6.01882 6.86481C6.09202 6.68824 6.19931 6.52782 6.33455 6.39273C6.46963 6.25749 6.63005 6.1502 6.80663 6.077C6.98321 6.00381 7.17249 5.96613 7.36364 5.96613C7.55479 5.96613 7.74406 6.00381 7.92064 6.077C8.09722 6.1502 8.25764 6.25749 8.39273 6.39273L8.43636 6.43636C8.60777 6.60403 8.82547 6.7165 9.06139 6.75928C9.29731 6.80205 9.54064 6.77317 9.76 6.67636H9.81818C10.0333 6.58417 10.2167 6.43109 10.346 6.23597C10.4752 6.04085 10.5445 5.81221 10.5455 5.57818V5.45455C10.5455 5.06878 10.6987 4.69881 10.9715 4.42603C11.2443 4.15325 11.6142 4 12 4C12.3858 4 12.7557 4.15325 13.0285 4.42603C13.3013 4.69881 13.4545 5.06878 13.4545 5.45455V5.52C13.4555 5.75403 13.5248 5.98267 13.654 6.17779C13.7833 6.37291 13.9667 6.52599 14.1818 6.61818C14.4012 6.71499 14.6445 6.74387 14.8804 6.70109C15.1164 6.65832 15.3341 6.54585 15.5055 6.37818L15.5491 6.33455C15.6842 6.19931 15.8446 6.09202 16.0212 6.01882C16.1978 5.94562 16.387 5.90795 16.5782 5.90795C16.7693 5.90795 16.9586 5.94562 17.1352 6.01882C17.3118 6.09202 17.4722 6.19931 17.6073 6.33455C17.7425 6.46963 17.8498 6.63005 17.923 6.80663C17.9962 6.98321 18.0339 7.17249 18.0339 7.36364C18.0339 7.55479 17.9962 7.74406 17.923 7.92064C17.8498 8.09722 17.7425 8.25764 17.6073 8.39273L17.5636 8.43636C17.396 8.60777 17.2835 8.82547 17.2407 9.06139C17.1979 9.29731 17.2268 9.54064 17.3236 9.76V9.81818C17.4158 10.0333 17.5689 10.2167 17.764 10.346C17.9591 10.4752 18.1878 10.5445 18.4218 10.5455H18.5455C18.9312 10.5455 19.3012 10.6987 19.574 10.9715C19.8468 11.2443 20 11.6142 20 12C20 12.3858 19.8468 12.7557 19.574 13.0285C19.3012 13.3013 18.9312 13.4545 18.5455 13.4545H18.48C18.246 13.4555 18.0173 13.5248 17.8222 13.654C17.6271 13.7833 17.474 13.9667 17.3818 14.1818V14.1818Z"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Logout
            </button>
        </div>
    )
} 