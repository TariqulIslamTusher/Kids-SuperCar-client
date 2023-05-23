import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from '../Loader/Loader';
import Category from './Category';


const HomeTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [catData, setCatData] = useState('')
  let category;
  if (tabIndex === 0) {
    category = 'Bus'
  } else if (tabIndex === 1) {
    category = "Truck"
  } else if (tabIndex === 2) {
    category = "Car"
  } else {
   // console.log(category);
  }

 // console.log(category);

  useEffect(() => {
    fetch(`http://localhost:4000/category?category=${category}`)
      .then(res => res.json())
      .then(data => {
       // console.log(data)
        setCatData(data)
      })
  }, [tabIndex])

  if (!catData) {
    return <Loader></Loader>
  }

  return (
    <div className='container mx-auto '>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className='text-xl font-bold px-6 py-2'>
        <Tab>Buses</Tab>
        <Tab>Trucks</Tab>
        <Tab>Cars</Tab>
      </TabList>

      <TabPanel> <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch'>{catData.slice(0, 3).map(data => <Category data={data}></Category>)}</div></TabPanel>
      <TabPanel> <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch'>{catData.slice(0, 3).map(data => <Category data={data}></Category>)}</div></TabPanel>
      <TabPanel> <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-stretch'>{catData.slice(0, 3).map(data => <Category data={data}></Category>)}</div></TabPanel>
    </Tabs>
    </div>
  );
};

export default HomeTab