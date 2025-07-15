import AppBar from '../Redux/AppBar/AppBar';
import Layout from '../Redux/Layout/LayOut';
import TaskForm from '../Redux/TaskForm/TaskForm';
import TaskList from '../Redux/TaskList/TaskList';
import store from '../../../redux/store.js';
import { Provider } from 'react-redux';
import CounterRedux from '../ReduxCounter/CounterRedux.jsx';

export const Module6 = () => {
  return (
    <Provider store={store}>
      <Layout>
        {/* <AppBar /> */}
        {/* <TaskForm />
        <TaskList /> */}
        <CounterRedux />
      </Layout>
    </Provider>
  );
};
export default Module6;
