import React from 'react'

import '../stylesheets/tabStyle.css'

const Tab = ({tab, setOpenedTabs}) => {

  const closeTab = (id) => {
    setOpenedTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
  };

  return (
    <div className='tab'>
      <div className='tab-header'>
        <span style={{paddingLeft: "5px"}}>{tab.name}</span>
        <button className='close-btn' onClick={() => closeTab(tab.id)}>X</button>
      </div>
      <div className='tab-content'>{tab.comp}</div>
  </div>
  )
}

export default Tab