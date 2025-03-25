"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; import React from 'react';
import Link from 'next/link';
import { ImageData } from "../_data/products";
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white w-full flex flex-col  lg:flex-row lg:h-screen overflow-hidden md:h-full">

            {/* Text element */}
            <div className="flex items-center justify-center w-full lg:w-1/2 p-6">
                <div className="flex flex-col justify-center max-w-xl">
                    <h5 className="text-xl sm:text-2xl md:text-2xl mb-2">Trade-in-offer</h5>
                    <h1 className="sm:text-3xl md:text-5xl lg:text-7xl leading-tight">
                        Super value deals <br />
                        <span className="text-[var(--d-teal)]">On all products</span>
                    </h1>
                    <p className="text-lg sm:text-lg md:text-xl text-gray-600 mt-4">
                        Save more with coupons & up to 70% off!
                    </p>
                    <div className="h-fit w-[100%] flex xl:flex-row justify-start gap-6">
                        <button className="mt-6 text-sm w-fit sm:text-base bg-[var(--d-teal)] py-3 px-6 sm:px-10 rounded-full cursor-pointer hover:bg-[var(--p-navy)] text-white transition" type="button">
                            <Link href='/shop'> Shop New</Link>
                        </button>
                        <button className="mt-6 text-[var(--p-navy)] text-sm w-fit sm:text-base border-1 border-[var(--p-navy)] py-3 px-6 sm:px-10 rounded-full cursor-pointer hover:bg-[var(--p-navy)] hover:text-white transition" type="button">
                            Sign In
                        </button>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0">
                {/* <Image
                    src="/image.png"
                    alt="Product Image"
                    width={600}
                    height={600}
                    sizes="(max-width: 740px) 300px, (max-width: 1024px) 450px, 600px"
                    className="opacity-95 w-10/12 sm:w-3/4 md:w-2/3 lg:w-[700px] h-auto"
                /> */}

                <div className="relative w-[450px] h-[450px] overflow-hidden">
                    <div className="relative h-full">
                        {ImageData.map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`slide-${index}`}
                                initial={{ opacity: 1, x: -100 }}
                                animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : 100 }}
                                transition={{ duration: 0.8 }}
                                className="absolute w-full h-full object-cover rounded-2xl"
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {ImageData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-100"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
