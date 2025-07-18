import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';

// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: 'Learn HTML and CSS', completed: true },
//       { id: 1, text: 'Get good at JavaScript', completed: true },
//       { id: 2, text: 'Master React', completed: false },
//       { id: 3, text: 'Discover Redux', completed: false },
//       { id: 4, text: 'Build amazing apps', completed: false },
//     ],
//   },
//   filters: {
//     status: 'all',
//   },
// };

// const tasksReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         items: state.items.map((task) =>
//           task.id !== action.payload
//             ? task
//             : { ...task, completed: !task.completed },
//         ),
//       };
//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
//   // counter: counterReducer,
// });

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
