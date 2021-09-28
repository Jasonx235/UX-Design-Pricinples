import React from "react";

export default function Constraint({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT CONSTRAINT</p>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH CONSTRAINT</p>
      </div>
    );
  }
}
