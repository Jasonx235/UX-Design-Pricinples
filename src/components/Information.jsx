import React, { useState, useEffect } from "react";
import menuItems from "../Data";

function Information({ selected, selectedID }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(menuItems[selectedID]);
  }, [selectedID]);

  if (selected === "About") {
    return (
      <div className='d-flex justify-content-center align-items-center flex-column h-100 w-100'>
        <div className='information-container '>
          <p>
            {data.name} {data.id}
          </p>
          <p>description</p>
          <p>{data.description}</p>
          <p>Learn More</p>
          <ul>
            {data.links &&
              data.links.map((link) => {
                return (
                  <li>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      {link}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column h-100 w-100'>
      <div className='information-container '>
        <p>
          {data.name} {data.id}
        </p>
        <div className='module-container d-flex justify-content-around flex-wrap'>
          {data.moduleWith}
          {data.moduleWithOut}
        </div>
        <p>description</p>
        <p>{data.description}</p>
        <p>Link</p>
        <ul>
          {data.links &&
            data.links.map((link) => {
              return (
                <li>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    {link}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Information;
