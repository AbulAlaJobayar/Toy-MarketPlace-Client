import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Marvel</Tab>
      <Tab>Avengers</Tab>
      <Tab>Star wars</Tab>
      <Tab> Transformers</Tab>

    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopByCategory;