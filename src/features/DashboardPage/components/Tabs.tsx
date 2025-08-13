
import { CloseOutlined } from "@ant-design/icons"
import ButtonBase from "../../../share/components/Button"
import * as React from "react";

interface tabProps {
  handleAddTab: (type: string, name: string) => void;
  handleCloseTab: (tab: { id: number, name: string, type: string }) => void;
  tabs: { id: number, name: string, type: string }[];
  tabSelect: { id: number, name: string, type: string };
  setTabSelect: (tab: { id: number, name: string, type: string }) => void;
}

const Tabs: React.FC<tabProps> = ({ handleAddTab, handleCloseTab, tabs, tabSelect, setTabSelect }) => {


  return (
    <div className="tabs-container" >
      {tabs.map(tab => (
        <div className={`tab ${tabSelect.id === tab.id ? 'selected' : ''}`} key={tab.id} onClick={() => setTabSelect(tab)}>
          <span>{tab.name}</span>
          {tab.type !== "dashboard" && <CloseOutlined
            onClick={(e) => {
              e.stopPropagation()
              handleCloseTab(tab)
            }} />}
        </div>))}
      <ButtonBase className={"button-tab"} nameButton={"+"} shape="circle" onClick={() => handleAddTab("pomanagement", "New Tab ")} />
    </div>

  )
}
export default Tabs