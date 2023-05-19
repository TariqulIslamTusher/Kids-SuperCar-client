import React from 'react';

const PhotoCard = ({children}) => {
    return (
        <div>
            <img className='w-52 h-52 border-4' src={children} alt="" />
        </div>
    );
};

export default PhotoCard;