import React, { useState, useEffect } from "react";
import menuItems from "../Data";

function Information({ selected, selectedID }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(menuItems[selectedID]);
  }, [selected, selectedID]);

  if (selected === "About") {
    return (
      <div className='d-flex justify-content-center align-items-center flex-column h-100 w-100'>
        <div className='information-container '>
          <p>
            {selected} {selectedID}
          </p>
          <p>description</p>
          <p>Link</p>
        </div>
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column h-100 w-100'>
      <div className='information-container '>
        <p>
          {selected} {selectedID}
        </p>
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

export default Information;
