import React from 'react';
import { useForm } from 'react-hook-form';

export const Form = ({ register, handleSubmit, onSubmit, errors }) => {
  const { watch} = useForm()
  return (
    <div className="relative flex h-screen">
      <div className="relative w-3/5 ml-auto flex items-center justify-center bg-white z-10">
        <div className="w-80 space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("cardholderName", { required: "Cardholder Name is required" })}
                type="text"
                placeholder="Cardholder Name"
                className="mb-2 p-2 border rounded-lg"
              />
              {errors.cardholderName && <span className="text-red-500">{errors.cardholderName.message}</span>}

              <input 
                {...register("cardNumber", {
                  required: "Card Number is required",
                  pattern: {
                    value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                    message: "Invalid card number"
                  }
                })}

                type="text"
                placeholder="Card Number"
                className="mb-2 p-2 border rounded-lg"
              />
              {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message}</span>}

              <div className="flex justify-between">
                <input
                  {...register("expiryDate", { required: "Expiry Date is required" })}
                  type="text"
                  placeholder="MM/YY"
                  className="mb-2 p-2 border rounded-lg w-1/2 mr-1"
                  pattern="\d{2}/\d{2}" required
                />
                <input
                  {...register("cvc", {
                    required: "CVC is required",
                    pattern: {
                      value: /^[0-9]{3}$/,
                      message: "Invalid CVC"
                    }
                  })}
                  type="text"
                  placeholder="CVC"
                  className="mb-2 p-2 border rounded-lg w-1/2 ml-1"
                />
              </div>
              {errors.expiryDate && <span className="text-red-500">{errors.expiryDate.message}</span>}
              {errors.cvc && <span className="text-red-500">{errors.cvc.message}</span>}

              <button onClick={()=>{(console.log(watch('cardholderName')))}} type="submit" className="bg-purple-500 text-white py-2 rounded-lg">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
