import { addQuery, addTodo, deleteTodo } from './actions';

const initialState = {
  todo: [],
  filter: '',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo.type:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case deleteTodo.type:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case addQuery.type:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
