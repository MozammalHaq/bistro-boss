import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-bg py-20  mb-20 relative">
            <div className="max-w-screen-lg mx-auto">
                <SectionTitle
                    subHeading={"Check It Out"}
                    heading={"From Our Menu"}
                ></SectionTitle>
                <div className="flex justify-center items-center gap-10">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="space-y-3 text-white">
                        <p>March 20, 2023</p>
                        <p className="uppercase font-semibold">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 mt-5 border-b-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;