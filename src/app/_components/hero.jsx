import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Hero = () => {
    return (
        <div className="bg-[var(--l-mist)] w-full flex flex-col  lg:flex-row lg:h-[90vh] overflow-hidden md:h-full">
            {/* Text element */}

            <div className="flex items-center justify-center w-full lg:w-1/2 p-6">
                <div className="flex flex-col justify-between max-w-lg">
                    <h5 className="text-xl sm:text-2xl md:text-3xl mb-2">Trade-in-offer</h5>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
                        Super value deals <br />
                        <span className="text-[var(--d-teal)]">On all products</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
                        Save more with coupons & up to 70% off!
                    </p>
                    <div className="h-fit w-[100%] flex xl:flex-row justify-start gap-6">
                        <button className="mt-6 text-base w-fit sm:text-lg bg-[var(--d-teal)] py-3 px-6 sm:px-10 rounded-full cursor-pointer hover:bg-[var(--p-navy)] text-white transition" type="button">
                            <Link href='/shop'> Shop New</Link>
                        </button>
                        <button className="mt-6 text-[var(--p-navy)] text-base w-fit sm:text-lg border-1 border-[var(--p-navy)] py-3 px-6 sm:px-10 rounded-full cursor-pointer hover:bg-[var(--p-navy)] hover:text-white transition" type="button">
                            Sign In
                        </button>
                    </div>

                </div>
            </div>
            {/* Image element */}
            <div className="flex items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0">
                <Image
                    src="/image.png"
                    alt="Product Image"
                    width={600}
                    height={600}
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 600px"
                    className="opacity-95 w-10/12 sm:w-3/4 md:w-2/3 lg:w-[600px] h-auto"
                />
            </div>
        </div>
    );
}

export default Hero;
