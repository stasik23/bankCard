export const Form = ({ register, handleSubmit, watch, onSubmit, errors , formatCardNumber }) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-2">
        <input
          {...register("cardholderName", { required: "Cardholder Name is required" })}
          type="text"
          placeholder="CARDHOLDER NAME"
          className="p-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        {errors.cardholderName && <span className="text-red-500">{errors.cardholderName.message}</span>}
      </div>
      <div className="flex flex-col space-y-2">
        <input
          {...register("cardNumber", {
            required: "Card Number is required",
            pattern: {
              value: {formatCardNumber},
              message: "Invalid card number"
            }
          })}
          type="text"
          placeholder="CARD NUMBER"
          className="p-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message}</span>}
      </div>
      <div className="flex space-x-2">
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
          className="p-3 border rounded-lg w-1/2 placeholder-gray-400 focus:outline-none focus:border-purple-500"
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
          className="p-3 border rounded-lg w-1/2 placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="flex flex-col space-y-2">
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
          className="p-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
        />
        {errors.cvc && <span className="text-red-500">{errors.cvc.message}</span>}
      </div>
      <button type="submit" className="w-full py-3 bg-purple-500 text-white rounded-lg">
        Confirm
      </button>
    </form>
  );
};
