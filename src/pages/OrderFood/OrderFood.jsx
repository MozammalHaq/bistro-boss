import { useState } from 'react';
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async";
import coverImg from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from '../../components/FoodCard/OrderTab';


const OrderFood = () => {
    const categories = ['salads', 'pizza', 'soups', 'dessert', 'drinks']
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const salads = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Order</title>
            </Helmet>
            <Cover img={coverImg} title="Order Shop"></Cover>
            <div className='max-w-screen-xl mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts} ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;