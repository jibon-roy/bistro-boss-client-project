
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useEffect, useState } from 'react';
import Card from '../../../components/card/Card';



const MenuTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [items, setItems] = useState([]);

    const publicAxios = useAxiosPublic();

    useEffect(() => {
        publicAxios.get(`/ourMenu`)
            .then(res => setItems(res.data))
            .catch(err => console.log(err));
    }, [])

    const salad = items?.filter(item => item?.category === 'salad');
    const pizza = items?.filter(item => item?.category === 'pizza');
    const soups = items?.filter(item => item?.category === 'soup');
    const desserts = items?.filter(item => item?.category === 'dessert');
    const drinks = items?.filter(item => item?.category === 'drinks');
    console.log(salad)

    return (
        <div>
            <Tabs className='mx-auto text-center my-20 max-w-7xl' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='uppercase'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            salad?.map(card => <Card key={card?._id} price={card?.price} card={card}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            pizza?.map(card => <Card key={card?._id} price={card?.price} card={card}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            soups?.map(card => <Card key={card?._id} price={card?.price} card={card}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            desserts?.map(card => <Card key={card?._id} price={card?.price} card={card}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {
                            drinks?.map(card => <Card key={card?._id} price={card?.price} card={card}></Card>)
                        }
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default MenuTabs;