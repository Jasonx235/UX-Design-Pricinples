import React from "react";
import profileNo from "../../images/moduleAssets/consistency/without/emojione_blond-haired-person-light-skin-tone.png";
import shoppingBagNo from "../../images/moduleAssets/consistency/without/emojione-v1_shopping-bags.png";
import settingsNo from "../../images/moduleAssets/consistency/without/eva_settings-fill.png";
import searchNo from "../../images/moduleAssets/consistency/without/flat-ui_search.png";
import saveNo from "../../images/moduleAssets/consistency/without/fluent_save-edit-24-filled.png";

import profileYes from "../../images/moduleAssets/consistency/with/mdi_account.png";
import shoppingBagYes from "../../images/moduleAssets/consistency/with/mdi_cart.png";
import settingsYes from "../../images/moduleAssets/consistency/with/mdi_cog.png";
import searchYes from "../../images/moduleAssets/consistency/with/mdi_magnify.png";
import saveYes from "../../images/moduleAssets/consistency/with/mdi_content-save.png";

export default function Consistency({ status }) {
  if (status) {
    return (
      <div className='module no consistency'>
        <p className='title'>WITHOUT CONSISTENCY</p>
        <div className='consistency-container'>
          <div className='consistency-row top'>
            <img src={profileNo} alt='profile icon w/o' className='hover3' />
            <img src={settingsNo} alt='setting icon w/o' className='hover2' />
            <img src={searchNo} alt='search icon w/o' className='hover1' />
          </div>
          <div className='consistency-row bot'>
            <img
              src={shoppingBagNo}
              alt='shopping icon w/o'
              className='hover3'
            />
            <img src={saveNo} alt='save icon w/o' className='hover2' />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='module yes consistency'>
        <p className='title'>WITH CONSISTENCY</p>
        <div className='consistency-container'>
          <div className='consistency-row top'>
            <img src={profileYes} alt='profile icon w' className='hover1' />
            <img src={settingsYes} alt='setting icon w' className='hover1' />
            <img src={searchYes} alt='search icon w' className='hover1' />
          </div>
          <div className='consistency-row bot'>
            <img
              src={shoppingBagYes}
              alt='shopping icon w'
              className='hover1'
            />
            <img src={saveYes} alt='save icon w' className='hover1' />
          </div>
        </div>
      </div>
    );
  }
}
