import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import Hero from '../_components/hero';
import PecialOffers from '../_components/pecialOffers';

export default function Home() {
    return (
        <div className="overflow-x-hidden w-screen h-full">
            <Navbar />
            <Hero />
            <PecialOffers />
            <Footer />
        </div>
    );
}
