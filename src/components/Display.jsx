import React from 'react'

const Display = (props) => {
    const { allTabs, currentTab } = props;

    
    return (
        <div className='display'>
            {allTabs[currentTab].tabContent}
        </div>
    )
}

export default Display