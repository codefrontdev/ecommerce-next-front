import Navbar from '../layout/navbar';
import Footer from '../layout/footer';

import Hero from '../_components/hero';
import PecialOffers from '../_components/pecialOffers';
import Products from '../_components/products'

export default function Home() {
    return (
        <div className="overflow-x-hidden w-screen h-full">
            <Navbar />
            <Hero />
            <PecialOffers />
            <Products />
            <Footer />
        </div>
    );
}
