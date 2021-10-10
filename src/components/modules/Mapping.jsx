import React, { useState } from "react";
import lightbulbOff from "../../images/moduleAssets/mapping/lightbulb-off.png";
import lightbulbOn from "../../images/moduleAssets/mapping/lightbulb-on.png";
import switchOff from "../../images/moduleAssets/mapping/light-off.png";
import switchOn from "../../images/moduleAssets/mapping/light-on.png";

export default function Mapping({ status }) {
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState();
  const [light3, setLight3] = useState(false);

  if (status) {
    return (
      <div className='module no mapping'>
        <p className='title'>WITHOUT MAPPING</p>
        <div className='bulbs'>
          {light2 ? (
            <img src={lightbulbOn} alt='lightbulb on 1' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 1' />
          )}
          {light3 ? (
            <img src={lightbulbOn} alt='lightbulb on 2' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 2' />
          )}
          {light1 ? (
            <img src={lightbulbOn} alt='lightbulb on 3' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 3' />
          )}
        </div>
        <div>
          <div className='switches switchesNo'>
            {light2 ? (
              <img
                src={switchOn}
                alt='switch on'
                onClick={() => {
                  setLight2(!light2);
                }}
              />
            ) : (
              <img
                src={switchOff}
                alt='switch off'
                onClick={() => {
                  setLight2(!light2);
                }}
              />
            )}
            {light3 ? (
              <img
                src={switchOn}
                alt='switch on'
                onClick={() => {
                  setLight3(!light3);
                }}
              />
            ) : (
              <img
                src={switchOff}
                alt='switch off'
                onClick={() => {
                  setLight3(!light3);
                }}
              />
            )}
          </div>
          <div className='switches switchesNo'>
            {light1 ? (
              <img
                src={switchOn}
                alt='switch on'
                onClick={() => {
                  setLight1(!light1);
                }}
              />
            ) : (
              <img
                src={switchOff}
                alt='switch off'
                onClick={() => {
                  setLight1(!light1);
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes mapping'>
        <p className='title'>WITH MAPPING</p>
        <div className='bulbs'>
          {light1 ? (
            <img src={lightbulbOn} alt='lightbulb on 1' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 1' />
          )}
          {light2 ? (
            <img src={lightbulbOn} alt='lightbulb on 2' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 2' />
          )}
          {light3 ? (
            <img src={lightbulbOn} alt='lightbulb on 3' />
          ) : (
            <img src={lightbulbOff} alt='lightbulb off 3' />
          )}
        </div>
        <div className='switches switchesYes'>
          {light1 ? (
            <img
              src={switchOn}
              alt='switch on 1'
              onClick={() => {
                setLight1(!light1);
              }}
            />
          ) : (
            <img
              src={switchOff}
              alt='switch off 1'
              onClick={() => {
                setLight1(!light1);
              }}
            />
          )}
          {light2 ? (
            <img
              src={switchOn}
              alt='switch on 2'
              onClick={() => {
                setLight2(!light2);
              }}
            />
          ) : (
            <img
              src={switchOff}
              alt='switch off 2'
              onClick={() => {
                setLight2(!light2);
              }}
            />
          )}
          {light3 ? (
            <img
              src={switchOn}
              alt='switch on 3'
              onClick={() => {
                setLight3(!light3);
              }}
            />
          ) : (
            <img
              src={switchOff}
              alt='switch off 3'
              onClick={() => {
                setLight3(!light3);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
