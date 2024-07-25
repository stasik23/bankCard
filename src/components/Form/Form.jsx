import React from 'react';

export const Form = ({ register, handleSubmit, watch, onSubmit, formatCardNumber, errors }) => {
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
                    value: { formatCardNumber },
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
                  {...register("expiryMonth", {
                    required: "Expiry Month is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])$/,
                      message: "Invalid Month"
                    }
                  })}
                  type="text"
                  placeholder="MM"
                  className="mb-2 p-2 border rounded-lg w-1/2 mr-1"
                />
                <input
                  {...register("expiryYear", {
                    required: "Expiry Year is required",
                    pattern: {
                      value: /^\d{2}$/,
                      message: "Invalid Year"
                    }
                  })}
                  type="text"
                  placeholder="YY"
                  className="mb-2 p-2 border rounded-lg w-1/2 ml-1"
                />
              </div>
              {errors.expiryMonth && <span className="text-red-500">{errors.expiryMonth.message}</span>}
              {errors.expiryYear && <span className="text-red-500">{errors.expiryYear.message}</span>}

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
                className="mb-2 p-2 border rounded-lg"
              />
          {errors.cvc && <span className="text-red-500">{errors.cvc.message}</span>}

          <button onClick={() => { console.log(watch()) }} type="submit" className="bg-purple-500 text-white py-2 rounded-lg">
            Confirm
          </button>
        </form>
      </div>
    </div>
      </div >
    </div >
  );
};