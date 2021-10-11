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
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                X
              </button>
            </div>
            <div className='center'>
              <iframe
                src='https://giphy.com/embed/AcfTF7tyikWyroP0x7'
                title='Grogu Gif w/o Feedback'
                width='240'
                height='135'
                frameBorder='0'
                class='giphy-embed'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div className='feedback-container'>
            <p className='title'>WITHOUT FEEDBACK</p>
            <div className='button-container'>
              <input
                type='submit'
                value='Click Me'
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
            <div className='close-button'>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                X
              </button>
            </div>
            <div className='center'>
              <iframe
                src='https://giphy.com/embed/AcfTF7tyikWyroP0x7'
                title='Grogu Gif w/ Feedback'
                width='240'
                height='135'
                frameBorder='0'
                class='giphy-embed'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div className='feedback-container'>
            <p className='title'>WITH FEEDBACK</p>
            <div className='button-container'>
              <input
                type='submit'
                value='Click Me'
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
