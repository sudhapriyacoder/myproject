import React, {useState} from 'react';
import '../../src/App.css';
import Header from '../Header';
import FAQ from './FAQ';


function Finance() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab:any) => {
      setActiveTab(tab);
    };
  return (
    <div className="App">
      <Header />
      <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 'FAQ' ? 'active' : ''}
          onClick={() => handleTabClick('FAQ')}
        >
          FAQ Questions
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'FAQ' && <div><FAQ /></div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
    </div>
  );
}

export default Finance;
