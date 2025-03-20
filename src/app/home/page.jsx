import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Hero from '../_components/hero';
import PecialOffers from '../_components/pecialOffers';
import Products from '../_components/products'
import { productsData, productsData2 } from '../_data/products';
import RepairServices from '../_components/repairServices';
import ImageShop from '../_components/imageShop';
export default function Home() {
    return (
        <div className="overflow-x-hidden w-screen h-full">
            <Navbar />
            <Hero />
            <PecialOffers />
            <Products products={productsData} title={"Featured Products"}/>
            <RepairServices/>
            <Products products={productsData2} title={"new Arrivals"}/>
            <ImageShop/>
            <Footer />
        </div>
    );
}
