import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from '../Loader/Loader';


const HomeTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [catData, setCatData] = useState('')
    let category;
    if(tabIndex===0){
      category = 'Bus'
    } else if(tabIndex === 1){
      category = "Truck"
    } else if(tabIndex ===2){
      category = "Car"
    } else{
      console.log(category);
    }

    console.log(category);

    useEffect(()=>{
      fetch(`http://localhost:4000/products?category=${category}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setCatData(data)
      })
    },[tabIndex])

    if(!catData){
      return <Loader></Loader>
    }

    return (
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    );
  };

  export default HomeTab