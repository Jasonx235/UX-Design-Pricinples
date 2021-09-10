import React from 'react'

export default function Affordance({status}) {
    if (status) {
        return (
            <div className="module yes">
                Yes
            </div>
        );
        
    }
    else {
        return (
            <div className='module no'>
                No
            </div>
        );
    }
}
