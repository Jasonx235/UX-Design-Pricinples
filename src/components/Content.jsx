import React, { useState } from "react";

function Content() {
  const [selected, setSelected] = useState("Affordance");
  return (
    <div className='content-container'>
      <div className='menu-container'>Menu</div>
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
