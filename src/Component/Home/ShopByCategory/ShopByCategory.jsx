
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('marvel')


    useEffect(() => {
        fetch(`http://localhost:5000/allToyByCategory/${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])
    console.log(toys)
    const handleMarvel = tabName => {
        setCategory(tabName)
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab><button onClick={() => handleMarvel('marvel')}>Marvel</button></Tab>
                    <Tab><button onClick={() => handleMarvel('avengers')}>Avengers</button></Tab>
                    <Tab><button onClick={() => handleMarvel('starwars')}>Star War</button></Tab>
                </TabList>

                <TabPanel>
                    {
                        toys.map(toy=><img src={toy.photo}></img>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        toys.map(toy=><img src={toy.photo}></img>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        toys.map(toy=><img src={toy.photo}></img>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;