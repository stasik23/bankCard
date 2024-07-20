import React from 'react';

export const Form = ({ changeValue, inputValue, handleChangeInput, input, handleSubmit }) => {
  return (
    <div className="relative flex h-screen">
      <div className="relative w-3/5 ml-auto flex items-center justify-center bg-white z-10">
        <div className="w-80 space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">{input}</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                value={input}
                onChange={handleChangeInput}
                type="text"
                placeholder="Cardholder Name"
                className="mb-2 p-2 border rounded-lg"
              />
              <input
                value={inputValue}
                onChange={changeValue}
                type="text"
                placeholder="Card Number"
                className="mb-2 p-2 border rounded-lg"
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mb-2 p-2 border rounded-lg w-1/2 mr-1"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="mb-2 p-2 border rounded-lg w-1/2 ml-1"
                />
              </div>
              <button type="submit" className="bg-purple-500 text-white py-2 rounded-lg">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
