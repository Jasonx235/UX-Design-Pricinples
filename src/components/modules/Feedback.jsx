import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function Feedback({ status }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitYes = () => {
    setLoading(true);
    setSubmitted(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const handleSubmitNo = () => {
    setTimeout(() => setSubmitted(true), 1500);
  };
  if (status) {
    return (
      <div className='module no feedback'>
        {submitted ? (
          <div>
            hi
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <div className='feedback-container'>
            <p className='title'>WITHOUT FEEDBACK</p>
            <div className='button-container'>
              <input
                type='submit'
                value='OK'
                className='feedbackNo'
                onClick={() => {
                  handleSubmitNo();
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='module yes feedback'>
        {loading ? (
          <div className='center'>
            <ReactLoading type='spin' color='#43b856' />
          </div>
        ) : submitted ? (
          <div>
            hi
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <div className='feedback-container'>
            <p className='title'>WITH FEEDBACK</p>
            <div className='button-container'>
              <input
                type='submit'
                value='OK'
                className='feedbackYes'
                onClick={() => {
                  handleSubmitYes();
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
