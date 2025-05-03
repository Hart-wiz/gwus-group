import React from "react";

const Thankyou = () => {
  return (
    <div className="text-black flex justify-center pt-70 flex-col items-center ">
      <h1 className="text-5xl  max-md:text-xl">Thank You For contacting Us</h1>
      <p className="font-bold text-xl"> Gwus Group of companies</p>
      <p className="text-green-600 text-center">
        Message successfully sent and we will reply promptly
      </p>
      <a href="/" className="bg-red-600 text-white p-3 m-5 hover:opacity-80">
        Go Back To Home
      </a>
    </div>
  );
};

export default Thankyou;
