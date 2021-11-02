import React from "react";

function Header({ setAnimate, animate }) {
  return (
    <div className='header-container'>
      <h1>
        UX Design
        <br />
        Principles
      </h1>
      <span className='name'>by Jason Mui</span>
      <button
        onClick={() => {
          setAnimate(!animate);
        }}
        className='animate-button'
      >
        {`Animations ${animate ? "On" : "Off"}`}
      </button>
    </div>
  );
}

export default Header;
