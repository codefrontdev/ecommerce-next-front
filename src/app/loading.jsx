'use client';
import { useEffect, useState } from 'react';
import Loader from "./_components/Loader";

export default function Loading() {
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(true);
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    if (!showPage) {
        return (
            <Loader />
        );
    }

    return null; 
}
