import Navbar from '../_components/navbar';
import Footer from '../_components/footer';
import Hero from './hero';
export default function Home() {
    return (
        <div className="overflow-x-hidden w-screen h-full">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
}
