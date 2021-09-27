import React, { useState } from "react";
import airplane from "../../images/moduleAssets/affordance/airplane.png";
import submarine from "../../images/moduleAssets/affordance/submarine.png";

export default function Affordance({ status }) {
  const [counter, setCounter] = useState(0);
  if (status) {
    return (
      <div className='module no affordance'>
        <p className='title'>WITHOUT AFFORDANCE</p>
        <div className='d-flex'>
          <div className='left'></div>
          <div>
            <img
              className='mx-auto pointer'
              src={airplane}
              alt='airplane'
              onClick={() => {
                setCounter(counter + 1);
              }}
            />
            <p className='counterNo'>{counter}</p>
            <img
              className='mx-auto pointer'
              src={submarine}
              alt='submarine'
              onClick={() => {
                setCounter(counter - 1);
              }}
            />
          </div>
          <div className='d-flex align-items-center right'>
            <p
              className='pointer reset'
              onClick={() => {
                setCounter(0);
              }}
            >
              Reset
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes affordance'>
        <p className='title'> WITH AFFORDANCE</p>
        <div className='d-flex flex-column'>
          <div className='d-flex'>
            <p
              id='addsub'
              className='pointer counterYes left red'
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </p>
            <p className='counterYes'>{counter}</p>
            <p
              id='addsub'
              className='pointer counterYes right green'
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </p>
          </div>
          <p
            className='pointer'
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </p>
        </div>
      </div>
    );
  }
}
