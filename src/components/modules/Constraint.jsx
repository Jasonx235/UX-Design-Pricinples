import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function Constraint({ status }) {
  const [myData, setMyData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (myData !== "") {
      setLoading(true);
      setError(false);
      setSubmitted(true);
      setTimeout(() => setLoading(false), 1000);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  if (status) {
    return (
      <div className='module no constraint'>
        {submitted ? (
          <div>
            {myData}
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
            {loading ? (
              <ReactLoading type='spin' color='blue' />
            ) : (
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
                {error && <p>Field cannot be empty</p>}
                <input
                  type='submit'
                  name='submit'
                  id='submit'
                  onClick={() => handleSubmit()}
                />
              </div>
            )}
          </div>
        )}
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
        <input
          type='submit'
          name='submit'
          id='submit'
          disabled={myData === "" ? true : false}
        />
      </div>
    );
  }
}
