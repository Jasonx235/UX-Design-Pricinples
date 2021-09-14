import React, { useState } from "react";
import menuItems from "../Data";
import Information from "./Information";

function Menu() {
  const [selected, setSelected] = useState("About");
  const [selectedID, setSelectedID] = useState(0);

  return (
    <div className='content-container'>
      <div className='menu-container'>
        <div className='d-lg-none'>
          <select
            onChange={(e) => {
              let info = JSON.parse(e.target.value);
              setSelected(info.name);
              setSelectedID(info.id);
            }}
          >
            {menuItems.map((option) => (
              <option value={JSON.stringify(option)} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className='d-none d-lg-block'>
          <ul className='text-center list'>
            {menuItems.map((option) => {
              return (
                <li
                  onClick={() => {
                    setSelected(option.name);
                    setSelectedID(option.id);
                  }}
                  key={option.id}
                  className={"menu " + (selected === option.name ? "selected" : "")}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Information selected={selected} selectedID={selectedID} />
    </div>
  );
}

export default Menu;
