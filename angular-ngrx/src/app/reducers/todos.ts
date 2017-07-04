import { Action } from '@ngrx/store';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, CLEAR_TODO } from '../actions';

export interface ITodoState {
  id?: number,
  title: string,
  isCompleted: boolean,
  created: Date
}

interface IAction extends Action {
  payload: ITodoState
}

export interface ITodoReducer<T> {
  (state: T, action: Action, IAction): T;
}

const INITIAL_STATE = [];

export const todoReducer: ITodoReducer<ITodoState[]> = (state: ITodoState[] = INITIAL_STATE, action: IAction) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: state.length + 1, ...action.payload}];

    case COMPLETE_TODO:
      const index = state.indexOf(action.payload);
      return [
        ...state.slice(0, index),
        {...action.payload, isCompleted: !action.payload.isCompleted},
        ...state.slice(index + 1)
      ];

    case REMOVE_TODO:
      return state;

    case CLEAR_TODO:
      return state;

    default:
      return state;
  }
};
