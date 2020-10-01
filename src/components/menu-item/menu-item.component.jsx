import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imgUrl,size}) => {
    return <div className={`${size} menu-item`} style={{
        backgroundImage: `url(${imgUrl})`
    }}>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
};

export default MenuItem;