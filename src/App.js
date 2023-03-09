import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Tabs from './components/Tabs';

function App() {


  
  const tabsList = [
    {tabNum: "Tab1", tabContent: "tab 1 content", active: false},
    {tabNum: "Tab2", tabContent: "tab 2 content", active: false},
    {tabNum: "Tab3", tabContent: "tab 3 content", active: false},
    {tabNum: "Tab4", tabContent: "tab 4 content", active: false}
  ]
  
  const [allTabs, setAllTabs] = useState(tabsList)
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className="App">
      <Tabs allTabs={allTabs} currentTab={currentTab} setCurrentTab={setCurrentTab} setAllTabs={setAllTabs}/>
      <Display allTabs={allTabs} currentTab={currentTab}  />
    </div>
  );
}

export default App;
