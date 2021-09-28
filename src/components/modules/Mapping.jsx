import React from 'react'

export default function Mapping({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT MAPPING</p>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH MAPPING</p>
      </div>
    );
  }
}
