import AppBar from "../Redux/AppBar/AppBar";
import Layout from "../Redux/Layout/LayOut";
import TaskForm from "../Redux/TaskForm/TaskForm";
import TaskList from "../Redux/TaskList/TaskList";
import store from "../../../redux/store.js";
import { Provider } from "react-redux";
import css from "./Module6.module.css";
import { Sidebar } from "lucide-react";

export const Module6 = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
};
export default Module6;
