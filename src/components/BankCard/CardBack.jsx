import React from 'react'

export const CardBack = () => {
    return (
        <div
            className="w-80 h-48 rounded-xl shadow-lg p-4 flex flex-col justify-between bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'url(/images/bg-card-back.png)',
            }}
        >
            <div className="flex justify-end items-center text-white">
                <div className="text-sm tracking-widest">000</div>
            </div>
        </div>
    )
}
