import React from 'react';

const HeroPages = ({img, title , text}) => {
    return (
        <div className={`bg-[url(/${img})] flex flex-col justify-center items-center bg-gray-950 bg-cover bg-center w-full h-90`}>
            <h1 className='text-gray-100 text-7xl m-3'>{title}</h1>
            <h5 className='text-gray-100 text-2xl m-3'>{text}</h5>
        </div>
    );
}

export default HeroPages;
