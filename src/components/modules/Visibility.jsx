import React from "react";

export default function Visibility({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT VISIBILITY</p>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH VISIBILITY</p>
      </div>
    );
  }
}
