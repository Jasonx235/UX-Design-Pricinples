import React from "react";

export default function Consistency({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT CONSISTENCY</p>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH CONSISTENCY</p>
      </div>
    );
  }
}
