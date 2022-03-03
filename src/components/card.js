import React from 'react';

function card(props) {
  return (
      <div className="w-[38rem] h-[26rem] bg-white rounded-lg mt-10 drop-shadow-2xl mobile:w-11/12 mobile:h-auto">
        {props.children}
      </div>
  );
}

export default card;
