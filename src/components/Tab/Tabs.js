import React, { useState, Children } from 'react';
import Tab from "./Tab";

const Tabs = props => {
    const [activeTab, setActiveTab]  = useState(props.children[0].props.label);
    const onClickTabItem = tab => setActiveTab(tab);
    return(
        <div className="tabs">
            <ol className="tab-list">
                {props.children.map(child=>{
                    return (
                        <Tab 
                            activeTab={activeTab}
                            key={child.props.label}
                            label={child.props.label}
                            onClick={onClickTabItem}
                            />
                    )
                })}
            </ol>
            <div className="tab-content">
                {props.children.map(child => {
                    if(child.props.label!== activeTab) return undefined;
                    return child.props.children
                })}
            </div>
        </div>
    )
}
export default Tabs;
