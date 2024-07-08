import React from 'react'
import logo from '../../images/bg-card-front.png'

export const CardFront = () => {
    return (
        <div>
            <div class="flex justify-center items-center h-screen">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 w-80">
                    <div class="flex justify-between items-center mb-4">
                        <div class="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={logo} alt="Card Issuer Logo" class="w-6 h-6"/>
                        </div>
                        <input value={'09/00'} type='text' class="text-white text-sm font-medium"/>
                    </div>
                    <input type='text' value={'9591 6489 6389 101E'} class="text-white text-3xl font-bold mb-2 border-none"/>
                    <input type='text' value={'FELICIA LEIRE'} class="text-white text-sm font-medium"/>
                </div>
            </div>
        </div>
    )
}
