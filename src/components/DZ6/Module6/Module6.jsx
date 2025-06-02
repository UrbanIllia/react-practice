import AppBar from "../Redux/AppBar/AppBar";
import Layout from "../Redux/Layout/LayOut";
import TaskForm from "../Redux/TaskForm/TaskForm";
import TaskList from "../Redux/TaskList/TaskList";
import store from "../../../redux/store.js";
import { Provider } from "react-redux";
import css from "./Module6.module.css";

export const Module6 = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
      <div className={css.wrapp}>
        <div className={css.item}>1</div>
        <div className={css.item}>2</div>
        <div className={css.item}>3</div>
        <div className={css.item}>4</div>
        <div className={css.item}>5</div>
        <div className={css.item}>6</div>
        <div className={css.item}>7</div>
        <div className={css.item}>8</div>
        <div className={css.item}>9</div>
        <div className={css.item}>10</div>
      </div>
    </Provider>
  );
};
export default Module6;
