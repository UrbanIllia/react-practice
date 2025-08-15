import { TbBrandRedux } from 'react-icons/tb';
import getRandomColorLight from '../../../utils/getRandomColorLight.js';
import CounterRedux from '../ReduxCounter/CounterRedux.jsx';
import ReduxToDoList from '../ReduxToDoList/ReduxToDoList.jsx';

export const Module6 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TbBrandRedux size={120} color={getRandomColorLight()} />
      <CounterRedux />
      <ReduxToDoList />
    </div>
  );
};
export default Module6;
