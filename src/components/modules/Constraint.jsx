import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function Constraint({ status }) {
  const [myData, setMyData] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitNo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
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
          <div className='center'>
            <ReactLoading type='spin' color='#043752' />
          </div>
        ) : submitted ? (
          <div className='constraint-submit'>
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMyData("");
                }}
              >
                X
              </button>
            </div>
            <div className='center'>
              <p className='hello'>
                Hi <b>{myData ? myData : "unknown"}</b>, how are you?
              </p>
              {!myData && <p className='red'>Error: name is not found</p>}
            </div>
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
                }}
              />
              <input
                type='submit'
                name='submit'
                className='submit submitExtra'
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
          <div className='center'>
            <ReactLoading type='spin' color='#043752' />
          </div>
        ) : submitted ? (
          <div className='constraint-submit'>
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMyData("");
                }}
              >
                X
              </button>
            </div>
            <div className='center'>
              <p className='hello'>
                Hi <b>{myData}</b>, how are you?
              </p>
            </div>
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
                }}
              />
              <input
                type='submit'
                name='submit'
                className={"submit " + (myData ? "submitExtra" : "")}
                onClick={() => handleSubmit()}
                disabled={myData ? false : true}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
