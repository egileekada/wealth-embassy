import React from 'react'
import imageOne from "../../assets/images/sermon/1.png"
import imageTwo from "../../assets/images/sermon/2.png"

export default function Index() { 

    const Information = [
        {
            name: "Sermon One",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae facilisis sem faucibus aenean arcu fames. Posuere diam maecenas dis sed amet eu augue cum. Elit sit.",
            image: imageOne
        },
        {
            name: "Sermon Two",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae facilisis sem faucibus aenean arcu fames. Posuere diam maecenas dis sed amet eu augue cum. Elit sit.",
            image: imageTwo
        },
    ]

    return (
        <div className=' font-Lora-Medium ' >index</div>
    )
} 