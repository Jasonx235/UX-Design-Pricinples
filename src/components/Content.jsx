import React, { useState } from "react";
import menuItems from "../Data";

function Content() {
  const [selected, setSelected] = useState("Affordance");

  return (
    <div className='content-container'>
      <div className='menu-container'>
        <div className='d-lg-none'>
          <select onChange={(e) => setSelected(e.target.value)}>
            {menuItems.map((option) => (
              <option value={option.label}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className='d-none d-lg-block '>
          <ul>
            {menuItems.map((option) => {
              return (
                <li
                  onClick={() => {
                    setSelected(option.label);
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=' d-flex justify-content-center align-items-center h-100 w-100'>
        <div className='information-container '>
          <p>{selected}</p>
          <div className='module-container d-flex justify-content-around flex-wrap'>
            <div className='without'> without</div>
            <div className='with'>with</div>
          </div>
          <p>description</p>
          <p>Link</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
