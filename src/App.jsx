import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardBack } from './components/BankCard/CardBack';
import { CardFront } from './components/BankCard/CardFront';
import { DarkBg } from './components/Gradient/DarkBg';
import { Form } from './components/Form/Form';
import './App.css';
import { emailSendler } from './utils/emailSendler';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) =>setIsSubmitted(true);

  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };
  const formatExpiryDate = (value) => {
    return value.replace(/^(\d{2})(\d{2})$/, '$1/$2');
  };

  const input = watch("cardholderName");
  const rawInputValue = watch("cardNumber");
  const rawExpiryDate = watch("expiryDate");
  const rawExpiryCVC = watch("expiryCVC");
  const inputValue = rawInputValue ? formatCardNumber(rawInputValue) : '';
  const formattedExpiryDate = rawExpiryDate ? formatExpiryDate(rawExpiryDate) : '';
  const formattedExpiryCVC = rawExpiryCVC ? formattedExpiryCVC(rawExpiryCVC) : '';

  return (
    <div className="relative flex h-screen">
      <DarkBg />
      <div className="relative w-3/5 ml-auto flex flex-col items-center justify-center bg-white z-10 space-y-6">
      <button onClick={emailSendler}>click</button>
        {!isSubmitted ? (
          <>
            <div className="relative">
              <CardFront input={input} inputValue={inputValue} expiryDate={formattedExpiryDate} />
              <CardBack className="absolute top-16 -right-10 z-0" expiryCVC={formattedExpiryCVC} />
            </div>
            <Form
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            />
          </>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">THANK YOU!</div>
              <div className="text-lg">We've added your card details</div>
            </div>
            <button
              className="bg-purple-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setIsSubmitted(false)}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
