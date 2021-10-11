import React, { useState } from "react";

export default function Visibility({ status }) {
  if (status) {
    return (
      <div className='module no visibility'>
        <p className='title'>WITHOUT VISIBILITY</p>
        <p className='welcome'>Welcome!</p>
        <p>All items 50% Off</p>
        <p className='click-to-enter'>Click here to Enter</p>
      </div>
    );
  } else {
    return (
      <div className='module yes visibility'>
        <p className='title'>WITH VISIBILITY</p>
        <p className='welcome font-weight-bold'>Welcome!</p>
        <p>
          All items <b>50%</b> Off
        </p>
        <button type='submit' className='enter'>
          Enter {"->"}
        </button>
      </div>
    );
  }
}
