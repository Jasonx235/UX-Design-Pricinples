import React from "react";

export default function Feedback({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT FEEDBACK</p>
        <div>
          <button type='submit'>OK</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH FEEDBACK</p>
        <div>
          <button type='submit'>OK</button>
        </div>
      </div>
    );
  }
}
