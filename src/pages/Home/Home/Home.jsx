import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Home</title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <p className="bg-black p-16 text-white max-w-screen-xl mx-auto text-center text-4xl mb-20">Call Us: +88 0192345678910</p>
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;