import React from 'react';

function card(props) {
  return (
      <div className="w-[38rem] h-[26rem] bg-white rounded-lg mt-10 drop-shadow-2xl">
        {props.children}
      </div>
  );
}

export default card;
