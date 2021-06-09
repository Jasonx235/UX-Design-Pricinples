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
              <option value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className='d-none d-lg-block '>
          <ul className='text-center'>
            {menuItems.map((option) => {
              return (
                <li
                  onClick={() => {
                    setSelected(option.name);
                  }}
                  className='menu'
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
  );
}

export default Content;
