import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Module1 from "./components/DZ1/Module1";
import Module2 from "./components/DZ2/Module2";
import css from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", tabIndex);
  }, [tabIndex]);
  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={css.tablist}>
          <Tab className={css.tabitem}>Module React 1</Tab>
          <Tab className={css.tabitem}>Module React 2</Tab>
        </TabList>

        <TabPanel>
          <Module1 />
        </TabPanel>
        <TabPanel>
          <Module2 />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
