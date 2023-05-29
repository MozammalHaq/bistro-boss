import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const salads = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>

            {/* Main Cover */}
            <Cover img={menuImg} title="Our Menu" ></Cover>

            {/* offered menu items */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* deserts menu items */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg} ></MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} ></MenuCategory>
            
            {/* Salads menu items */}
            <MenuCategory items={salads} title="salads" img={saladImg} ></MenuCategory>
            
            {/* Soups menu items */}
            <MenuCategory items={salads} title="salads" img={saladImg} ></MenuCategory>
            
            {/* Salads menu items */}
            <MenuCategory items={soups} title="soups" img={soupImg} ></MenuCategory>
            
            {/* Drinks menu items */}
            <MenuCategory items={drinks} title="drinks" img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;