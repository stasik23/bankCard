import React from 'react'


export const CardFront = ({ input, inputValue }) => {
    return (
        <div
            className="w-80 h-48 rounded-xl shadow-lg p-4 flex flex-col justify-between bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url(/images/bg-card-front.png)',
            }}
        >
            <div className="flex justify-between items-center text-white">
                <div className="text-2xl tracking-widest">{inputValue}</div>
                <div className="text-sm">00/00</div>
            </div>
            <div className="text-white text-xl tracking-widest">{input}</div>
        </div>
    )
}
