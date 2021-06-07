import React, { useState } from "react";

function Content() {
  const [selected, setSelected] = useState("Affordance");
  const menuItems = [
    {
      label: "Affordance",
      action: () => {
        setSelected("Affordance");
      },
    },
    {
      label: "Mapping",
      action: () => {
        setSelected("Mapping");
      },
    },
    {
      label: "Consistency",
      action: () => {
        setSelected("Consistency");
      },
    },
  ];

  return (
    <div className='content-container'>
      <div className='menu-container'>
        <div className='d-lg-none'>
          <select onChange={(e) => setSelected(e.target.value)}>
            {menuItems.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className='d-none d-lg-block '>
          <ul>
            {menuItems.map((option) => {
              return (
                <li
                  onClick={() => {
                    option.action();
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='information-container'>
        <p>{selected}</p>
        <div className='module-container'>
          <div> without</div>
          <div>with</div>
        </div>
        <p>description</p>
        <p>Link</p>
      </div>
    </div>
  );
}

export default Content;
