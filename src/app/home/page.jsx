import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Hero from '../_components/hero';
import PecialOffers from '../_components/pecialOffers';
import RepairServices from '../_components/repairServices';
import ImageShop from '../_components/imageShop';
import Trademarks from '../_components/trademarks';
import ScrollView from '../_components/scrollView';
import ProductsPage from '../_components/products';
export default function Home() {
    return (
        <div className="overflow-x-hidden w-screen h-full">
            <ScrollView />
            <Navbar />
            <Hero />
            <PecialOffers />
            <ProductsPage
                text="Deluxe Collection New Modem Deisgns"
                title="Featured Products" />
            <RepairServices />
            <Trademarks />
            <ImageShop />
            <Footer />
        </div>
    );
}
