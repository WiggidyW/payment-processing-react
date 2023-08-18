import { FormEvent, ReactElement } from "react";
import "./App.css";

const App = (): ReactElement => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Payment Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

        <div className="mb-4">
          <span className="text-lg font-medium text-gray-700">Amount Due:</span>
          <span className="text-lg font-semibold ml-2">$100.00</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Cardholder Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Expiration Date
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              CVV
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              placeholder="123"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
