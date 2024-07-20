import './App.css'
import { useState } from 'react'
import validator from 'validator'
import { CardBack } from './components/BankCard/CardBack'
import { CardFront } from './components/BankCard/CardFront'
import { DarkBg } from './components/Gradient/DarkBg'
import { Form } from './components/Form/Form'

function App() {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const changeValue = (e) => {
    const rawValue = e.target.value.replace(/\s/g, '');
    const formattedValue = rawValue.replace(/(.{4})/g, '$1 ').trim();
    setInputValue(formattedValue);
    if (validator.isCreditCard(rawValue)) {
      setErrorMessage('Valid CreditCard Number');
    } else {
      setErrorMessage('Enter valid CreditCard Number!');
    }
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isCreditCard(inputValue.replace(/\s/g, ''))) {
      setIsSubmitted(true);
    } else {
      setErrorMessage('Enter valid CreditCard Number!');
    }
  };

  return (
    <div className="relative flex h-screen">
      <DarkBg />
      <div className="relative w-3/5 ml-auto flex flex-col items-center justify-center bg-white z-10 space-y-6">
        {!isSubmitted ? (
          <>
            <div className="relative">
              <CardFront input={input} inputValue={inputValue} />
              <CardBack className="absolute top-16 -right-10 z-0" />
            </div>
            <Form
              input={input}
              handleChangeInput={handleChangeInput}
              inputValue={inputValue}
              changeValue={changeValue}
              handleSubmit={handleSubmit}
            />
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
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

export default App
