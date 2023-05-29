import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";


const MenuCategory = ({ items, title, img }) => {
    return (
        <section className="my-20">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 mt-5 border-b-4">Order Now</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuCategory;