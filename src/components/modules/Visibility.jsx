import React from "react";

export default function Visibility({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT VISIBILITY</p>
        <p>Welcome!</p>
        <p>All items 50% Off</p>
        <p>Click here to Enter</p>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH VISIBILITY</p>
        <p>Welcome!</p>
        <p>All items 50% Off</p>
        <button type='submit'>Enter -></button>
      </div>
    );
  }
}
