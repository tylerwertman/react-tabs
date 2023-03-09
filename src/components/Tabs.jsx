import React, {useState} from 'react'
import '../App.css';

const Tabs = ({ allTabs, setCurrentTab, currentTab }) => {

const [clickClass, setClickClass] = useState("tab")

    const selectedTab = (idx) => {
        setCurrentTab(idx);
        
        console.log(allTabs[idx]) // test this
        if((allTabs[currentTab].active===false) && (allTabs[currentTab])){
            setClickClass("tab")
            allTabs[currentTab].active=true
            // console.log("if",allTabs[currentTab].active)
            
        }else{
            setClickClass("tab clicked")
            allTabs[currentTab].active=false
            // console.log("else",allTabs[currentTab].active)
        }
    }

    return (
        <div className='row'>
            {allTabs.map((list, i) =>
                    <div className={
                            allTabs[currentTab].active?"tab clicked":"tab"
                    } key={i} onClick={(e)=>selectedTab(i)}>
                        <h3>{list.tabNum}{list.active}</h3>
                    </div>
                )}

        </div>
    )
}

export default Tabs