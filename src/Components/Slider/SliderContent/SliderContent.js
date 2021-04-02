import React from 'react'

export default function SliderContent({translate, transition,children}) {

    return (
        <div style={{
            transform: `translateX(-${translate}.px)`,
            transition: `transform ease-out ${transition}s`,
            display: 'inline-flex',
        }}>
            {children}
        </div>
    )
}
