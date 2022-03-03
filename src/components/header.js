import React from 'react';

function header() {
  return (
    <div className="h-48 bg-[url('/src/assets/pattern-circles.svg')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center mt-16">
      <p className="text-4xl mobile:text-2xl font-semibold text-DarkDesaturatedBlue">Simple, traffic-based pricing</p>
      <p className="text-center mobile:w-[70%] mobile:text-sm text-lg mt-4 text-GrayishBlue">Sign-up for our 30-day trial. No credit card required.</p>
    </div>
  );
}

export default header;
