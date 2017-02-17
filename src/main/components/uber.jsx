import React from 'react';

import SvgIcon from 'material-ui/SvgIcon';

export default props => (
    <SvgIcon {...props} viewBox="0 0 35 35">
        <rect x="0.5" y="0.5" width="33" height="33" rx="2.5" ry="2.5"/>
        <path fill="white" d="M32,2a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H32m0-1H4A3,3,0,0,0,1,4V32a3,3,0,0,0,3,3H32a3,3,0,0,0,3-3V4a3,3,0,0,0-3-3h0Z" transform="translate(-1 -1)"/>
        <path fill="white" d="M18,8a10,10,0,0,0-9.95,9H15V15.5a0.5,0.5,0,0,1,.5-0.5h5a0.5,0.5,0,0,1,.5.5v5a0.5,0.5,0,0,1-.5.5h-5a0.5,0.5,0,0,1-.5-0.5V19H8.05A10,10,0,1,0,18,8Z" transform="translate(-1 -1)"/>
    </SvgIcon>
);