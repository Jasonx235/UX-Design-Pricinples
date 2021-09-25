import React, { useState } from "react";
import airplane from "../../images/moduleAssets/affordance/airplane.png";
import submarine from "../../images/moduleAssets/affordance/submarine.png";

export default function Affordance({ status }) {
  const [noCounter, setNoCounter] = useState(0);
  const [yesCounter, setYesCounter] = useState(0);
  if (status) {
    return (
      <div className='module no'>
        <p>WITHOUT AFFORDANCE</p>
        <div>
          <img
            src={airplane}
            alt='airplane'
            onClick={() => {
              setNoCounter(noCounter + 1);
            }}
          />
          <div>
            <p>{noCounter}</p>
            <p
              onClick={() => {
                setNoCounter(0);
              }}
            >
              Reset
            </p>
          </div>
          <img
            src={submarine}
            alt='submarine'
            onClick={() => {
              setNoCounter(noCounter - 1);
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p>WITH AFFORDANCE</p>
        <div>
          <span
            onClick={() => {
              setNoCounter(noCounter - 1);
            }}
          >
            -
          </span>
          <span>{noCounter}</span>
          <span
            onClick={() => {
              setNoCounter(noCounter + 1);
            }}
          >
            +
          </span>
        </div>
        <div
          onClick={() => {
            setNoCounter(0);
          }}
        >
          Reset
        </div>
      </div>
    );
  }
}
