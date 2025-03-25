import Image from 'next/image';
import React from 'react';

const Trademarks = () => {
    return (
        <div className='w-full h-50 bg-gray-100 flex justify-center items-center flex-row gap-4 p-4'>
            <Image alt='trademarks' className='h-[80%] w-[80%] mix-blend-darken' src='/armani.svg' width={50} height={50} />
            <Image alt='trademarks' className='h-[80%] w-[80%] mix-blend-darken' src='/gucci-logo-svgrepo-com.svg' width={50} height={50} />
            <Image alt='trademarks' className='h-[80%] w-[80%] mix-blend-darken' src='/chanel-svgrepo-com.svg' width={50} height={50} />
            <Image alt='trademarks' className='h-[80%] w-[80%] mix-blend-darken' src='/emporio-armani.svg' width={50} height={50} />
            <Image alt='trademarks' className='h-[80%] w-[80%] mix-blend-darken' src='/nike-4-logo-svgrepo-com.svg' width={50} height={50} />
        </div>
    );
}

export default Trademarks;
