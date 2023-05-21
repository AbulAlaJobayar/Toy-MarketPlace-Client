
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

    const [toys,setToys]=useState([]);
    const [cata,setCata]=useState();

    useEffect(()=>{
        fetch('http://localhost:5000/homedata')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    // const { _id, name, data } = toy

    return (
        <div>
                <Tabs>
               <TabList>
                   <Tab>{toys.map(toy=>setCata(toy))}</Tab>
               </TabList>

               <TabPanel>
                   <h2>Any content 1</h2>
               </TabPanel>
               <TabPanel>
                   <h2>Any content 2</h2>
               </TabPanel>
           </Tabs> 
        </div>
    );
};

export default ShopByCategory;