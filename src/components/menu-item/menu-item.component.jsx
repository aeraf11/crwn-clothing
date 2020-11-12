import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div style={{
        backgroundImage : `url(${imageUrl})`
    }} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style= {{
            backgroundImage : `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </div>
)

export default withRouter(MenuItem)