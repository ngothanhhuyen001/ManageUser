import { useState } from "react";
import Tabs from "./components/Tabs";
import ContentDashboardPage from "./components/ContentDashboardView";
import POManagementPage from "./components/POManagermentPage";


interface Tab {
  id: number;
  name: string;
  type: string;
}

const DashboardPage = () => {
const [tabs, setTabs] = useState<Tab[]>([{ id: 1, name: "Dashboard", type: "dashboard" }])
  const [key, setKey] = useState(2);
  const [tabSelect, setTabSelect] = useState<Tab>({ id: 1, name: "Dashboard", type: "dashboard" })

  const handleAddTab = (type: string, name: string) => {
    setKey(key + 1)
    const newTab = { id: key, name: name, type: type }
    setTabs([...tabs, newTab])
    setTabSelect(newTab)
  }

  const handleCloseTab = (tabSelectClose: Tab) => {
    setTabs(tabs.filter(tab => tab.id !== tabSelectClose.id));
    setTabSelect(tabs[0]);
  }

  return (
    <div>
      <Tabs
        tabs={tabs}
        tabSelect={tabSelect}
        setTabSelect={setTabSelect}
        handleAddTab={handleAddTab}
        handleCloseTab={handleCloseTab}
      />
      {tabSelect.type === "dashboard" ?<ContentDashboardPage handleAddTab={handleAddTab} /> : <POManagementPage/> }
    </div>
  );
};

export default DashboardPage