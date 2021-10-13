import React, { useState, useEffect } from "react";
import menuItems from "../Data";

function Information({ selectedID }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(menuItems[selectedID]);
  }, [selectedID]);
  if (menuItems[selectedID].name === menuItems[0].name) {
    return (
      <div className='d-flex justify-content-center align-items-center flex-column h-100 w-100'>
        <div className='information-container '>
          <p className='name'>{data.name}</p>
          <p>{data.description}</p>
          <hr />
          <p>
            <b>Learn More:</b>
          </p>
          <ul>
            {data.links &&
              data.links.map((link, index) => {
                return (
                  <li className='sources' key={parseInt(index, 10)}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      Source
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
        <p className='name'>{data.name}</p>
        <div className='module-container d-flex justify-content-around flex-wrap'>
          {data.moduleWith}
          {data.moduleWithOut}
        </div>
        <br />
        <p>{data.description}</p>
        <hr />

        <p>
          <b>Learn More:</b>
        </p>
        <ul>
          {data.links &&
            data.links.map((link, index) => {
              return (
                <li className='sources' key={parseInt(index, 10)}>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    Source
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
