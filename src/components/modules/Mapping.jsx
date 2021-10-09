import React from "react";
import lightbulbOff from "../../images/moduleAssets/mapping/akar-icons_light-bulb.png";
import lightbulbOn from "../../images/moduleAssets/mapping/lightbulb-on.png";
import switchOff from "../../images/moduleAssets/mapping/light-off.png";
import switchOn from "../../images/moduleAssets/mapping/light-on.png";

export default function Mapping({ status }) {
  if (status) {
    return (
      <div className='module no'>
        <p className='title'>WITHOUT MAPPING</p>
        <div>
          <img src={lightbulbOff} alt='lightbulb off' />
          <img src={lightbulbOff} alt='lightbulb off' />
          <img src={lightbulbOff} alt='lightbulb off' />
        </div>
        <div>
          <img src={switchOff} alt='switch off' />
          <img src={switchOff} alt='switch off' />
          <img src={switchOff} alt='switch off' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes'>
        <p className='title'>WITH MAPPING</p>
        <div>
          <img src={lightbulbOn} alt='lightbulb on' />
          <img src={lightbulbOn} alt='lightbulb on' />
          <img src={lightbulbOn} alt='lightbulb on ' />
        </div>
        <div>
          <img src={switchOn} alt='switch on' />
          <img src={switchOn} alt='switch on' />
          <img src={switchOn} alt='switch on' />
        </div>
      </div>
    );
  }
}
