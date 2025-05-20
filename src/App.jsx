import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Module1 from "./components/DZ1/Module1";
import Module2 from "./components/DZ2/Module2";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import Quiz from "./components/DZ2/kahoot/Quiz";
import Module3 from "./components/DZ3/Module3/Module3";
import "react-toastify/dist/ReactToastify.css";
import Module4 from "./components/DZ4/Module4/Module4";

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
          <Tab className={css.tabitem}>Quiz</Tab>
          <Tab className={css.tabitem}>React 1</Tab>
          <Tab className={css.tabitem}>React 2</Tab>
          <Tab className={css.tabitem}>React 3</Tab>
          <Tab className={css.tabitem}>React 4</Tab>
        </TabList>

        <TabPanel>
          <Quiz />
        </TabPanel>
        <TabPanel>
          <Module1 />
        </TabPanel>
        <TabPanel>
          <Module2 />
        </TabPanel>
        <TabPanel>
          <Module3 />
        </TabPanel>
        <TabPanel>
          <Module4 />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
