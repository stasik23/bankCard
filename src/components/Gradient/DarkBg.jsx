import React from 'react'

export const DarkBg = () => {
    return (
        <div>
            <div 
            className="absolute inset-0 w-2/5 h-full"
            style={{
                backgroundImage: 'url(/images/bg-main-desktop.png)',
                backgroundSize:'cover'
            }}>

            </div>
        </div>
    )
}
