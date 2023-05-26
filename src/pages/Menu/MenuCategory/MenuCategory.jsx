import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


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
            </div>
        </section>
    );
};

export default MenuCategory;