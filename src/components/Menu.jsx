import React, { useState } from "react";
import menuItems from "../Data";
import Information from "./Information";
import Dropdown from "react-dropdown";

function Menu() {
  const [selected, setSelected] = useState("About");
  const [selectedID, setSelectedID] = useState(0);
  const options = menuItems.map((option) => ({
    value: option,
    key: option.id + 200,
    label: option.name,
  }));

  return (
    <div className='content-container'>
      <div className='menu-container'>
        <div className='d-lg-none'>
          <Dropdown
            onChange={(e) => {
              console.log(e.label);
              console.log(e.value.id);
              setSelected(e.value.name);
              setSelectedID(e.value.id);
            }}
            options={options}
            className='drop-down'
            placeholder='About'
            controlClassName='myControlClassName'
            placeholderClassName='myPlaceholderClassName'
            menuClassName='myMenuClassName'
            arrowClassName='myArrowClassName'
            arrowClosed={<span className='arrow-closed'>&#9660;</span>}
            arrowOpen={<span className='arrow-open'>&#9650;</span>}
          ></Dropdown>
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
                  key={option.id + 100}
                  className={
                    "menu " + (selected === option.name ? "selected" : "")
                  }
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
