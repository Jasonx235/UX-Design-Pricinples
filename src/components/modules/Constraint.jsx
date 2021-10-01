import React, { useState } from "react";

export default function Constraint({ status }) {
  const [myData, setMyData] = useState("");

  if (status) {
    return (
      <div className='module no constraint'>
        <p className='title'>WITHOUT CONSTRAINT</p>
        <div className='constraint-container'>
          <label htmlFor='name'>Enter your name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => {
              setMyData(e.target.value);
              console.log(myData);
            }}
          />
        </div>
        <input type='submit' name='submit' id='submit' />
      </div>
    );
  } else {
    return (
      <div className='module yes constraint'>
        <p className='title'>WITH CONSTRAINT</p>
        <div className='constraint-container'>
          <label htmlFor='name'>Enter your name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => {
              setMyData(e.target.value);
              console.log(myData);
            }}
          />
        </div>
        <input type='submit' name='submit' id='submit' />
      </div>
    );
  }
}
