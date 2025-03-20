import React from 'react';

const RepairServices = () => {
    return (
        <div className="relative w-full h-80 bg-cover bg-center bg-[url(/jfjfjf.jpeg)] flex justify-center items-center flex-col px-4 text-center">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <h1 className="z-10 text-gray-100 text-lg md:text-xl">Repair Services</h1>
            <h1 className="z-10 text-gray-100 text-2xl md:text-4xl lg:text-6xl font-bold max-w-2xl">
                upto <span className="text-red-500">70% off</span> - all t-shirts & accessories
            </h1>
            <a
                className="z-10 mt-4 rounded-lg border border-gray-100 bg-gray-100 px-6 py-2 text-gray-900 hover:bg-transparent hover:text-gray-100 transition-all duration-300 text-sm md:text-base"
                href="#"
            >
                explore more
            </a>
        </div>
    );
};


export default RepairServices;