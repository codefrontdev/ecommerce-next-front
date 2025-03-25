import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-[var(--d-teal)] animate-bounce" />
            <div className="w-4 h-4 rounded-full bg-[var(--d-teal)] animate-bounce [animation-delay:-.10s]" />
            <div className="w-4 h-4 rounded-full bg-[var(--d-teal)] animate-bounce [animation-delay:-.3s]" />
        </div>
    );
}

export default Loader;
