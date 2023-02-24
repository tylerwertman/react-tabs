import React from 'react'

const Tabs = ({ allTabs, currentTab, setCurrentTab }) => {

    const selectedTab = (idx) => {
        setCurrentTab(idx)
        // console.log("currentTab", currentTab)
    }
    // console.log(allTabs)


    return (
        <div className='row'>
            {
                allTabs.map((list, i) =>
                    <div key={i} onClick={()=>selectedTab(i)} style={{
                        border: "2px solid black",
                        width: "100px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <h3>{list.tabNum}</h3>

                    </div>
                )
            }

        </div>
    )
}

export default Tabs