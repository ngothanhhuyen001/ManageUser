
import { CloseOutlined } from "@ant-design/icons"
import ButtonBase from "../../../share/components/Button"

import { useState } from "react"
import ContentDashboardPage from "./ContentDashboardView";
import POManagementPage from "./POManagermentPage";
interface Tab {
  id: number;
  name: string;
  type: string;
}

const Tabs = () => {
  const [tabs, setTabs] = useState<Tab[]>([{ id: 1, name: "Dashboard", type: "dashboard" }])
  const [key, setKey] = useState(2);
  const [tabSelect, setTabSelect] = useState({ id: 1, name: "Dashboard", type: "dashboard" })

  const handleAddTab = () => {
    setKey(key + 1)
    const newTab = { id: key, name: "New Tab", type: "pomanagement" }
    setTabs([...tabs, newTab])
    setTabSelect(newTab)
  }

  const renderContentTab = () => {

    switch (tabSelect.type) {
      case "dashboard":
        return <ContentDashboardPage />
      case "pomanagement":
        return <POManagementPage />
      default:
        return <ContentDashboardPage />
    }
  }

  const handleCloseTab = (tabSelectClose: Tab) => {
    setTabs(tabs.filter(tab => tab.id !== tabSelectClose.id));
    setTabSelect(tabs[0]);
  }

  return (
    <div>
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
        <ButtonBase className={"button-tab"} nameButton={"+"} shape="circle" onClick={handleAddTab} />
      </div>
      <div>
        {tabs.map(tab => (
          <div key={tab.id}  style={{ display: tab.id === tabSelect.id ? "block" : "none" }}>
            {renderContentTab()}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Tabs