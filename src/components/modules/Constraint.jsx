import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function Constraint({ status }) {
  const [myData, setMyData] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitNo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setSubmitted(true);
  };

  const handleSubmit = () => {
    if (myData !== "") {
      setLoading(true);

      setSubmitted(true);
      setTimeout(() => setLoading(false), 500);
    } else {
      setSubmitted(false);
    }
  };

  if (status) {
    return (
      <div className='module no constraint'>
        {loading ? (
          <ReactLoading type='spin' color='blue' />
        ) : submitted ? (
          <div>
            Hi {myData ? myData : "unknown"}, how are you?
            <button
              onClick={() => {
                setSubmitted(false);
                setMyData("");
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <p className='title'>WITHOUT CONSTRAINT</p>
            <div className='constraint-container'>
              <label htmlFor='name'>Enter your name</label>
              <input
                type='text'
                name='name'
                value={myData}
                onChange={(e) => {
                  setMyData(e.target.value);
                  console.log(myData);
                }}
              />
              <input
                type='submit'
                name='submit'
                id='submit'
                onClick={() => handleSubmitNo()}
              />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='module yes constraint'>
        {loading ? (
          <ReactLoading type='spin' color='blue' />
        ) : submitted ? (
          <div>
            Hi {myData}, how are you?
            <button
              onClick={() => {
                setSubmitted(false);
                setMyData("");
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <p className='title'>WITHOUT CONSTRAINT</p>
            <div className='constraint-container'>
              <label htmlFor='name'>Enter your name</label>
              <input
                type='text'
                name='name'
                value={myData}
                onChange={(e) => {
                  setMyData(e.target.value);
                  console.log(myData);
                }}
              />
              <input
                type='submit'
                name='submit'
                id='submit'
                onClick={() => handleSubmit()}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
