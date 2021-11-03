import React, { useState } from "react";
import menuItems from "../Data";
import Information from "./Information";
import Dropdown from "react-dropdown";

function Menu({ selected }) {
  const [selectedID, setSelectedID] = useState(selected);
  const options = menuItems.map((option) => ({
    value: option,
    label: option.name,
  }));
  return (
    <div className='content-container'>
      <div className='menu-container'>
        <div className='d-lg-none'>
          <Dropdown
            onChange={(e) => {
              setSelectedID(e.value.id);
              window.history.replaceState(
                null,
                null,
                `/${e.value.name.toLowerCase()}`
              );
            }}
            options={options}
            className='drop-down'
            placeholder={options[selectedID].label}
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
                    setSelectedID(option.id);
                    window.history.pushState(
                      null,
                      null,
                      `/${option.name.toLowerCase()}`
                    );
                    window.history.replaceState(
                      null,
                      null,
                      `/${option.name.toLowerCase()}`
                    );
                  }}
                  tabIndex={parseInt(option.id, 10) + 1}
                  key={parseInt(option.id, 10)}
                  className={
                    "menu " +
                    (options[selectedID].label === option.name
                      ? "selected"
                      : "")
                  }
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Information selectedID={selectedID} />
    </div>
  );
}

export default Menu;
