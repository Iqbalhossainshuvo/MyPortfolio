import React from 'react';
import NotFoundPic from '../../asset/404-animated.gif'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
        <img src={NotFoundPic} alt="" />
        
    </div>
    );
};

export default NotFound;