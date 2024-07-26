// import React from 'react'

// export const CardBack = ({ expiryCVC }) => {
//     return (
//         <div
//             className="w-80 h-48 rounded-xl shadow-lg p-4 flex flex-col justify-between bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: 'url(/images/bg-card-back.png)',
//             }}
//         >
//             <div className="flex justify-end items-center text-white">
//                 <div className="text-sm tracking-widest">{expiryCVC || '000'}</div>
//             </div>
//         </div>
//     )
// }
import React from 'react';

export const CardBack = ({ expiryCVC }) => {
  return (
    <div className="relative w-96 h-56 bg-[url('/images/bg-card-back.png')] shadow-inner p-4 rounded-lg text-black flex items-end justify-end">
      <div className="text-lg text-gray-700">{expiryCVC || '000'}</div>
    </div>
  );
};

