import React from 'react';
import { GridTile } from 'material-ui/GridList';

import styles from '../css/info.css';

export default ({place, ...props}) => {
    
    const classNames = [styles['stay-place'], styles[`stay-place--${place}`]];
    
    return (
        <GridTile className={classNames.join(' ')} containerElement="a" target="_blank" {...props}/>
    );
};