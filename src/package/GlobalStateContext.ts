import { createContext } from 'react';
import type { IState, IAction } from './GlobalStateReducer';

const initialValue: [IState, (action: IAction) => IState] = [
  undefined,
  () => {},
];

const GlobalStateContext = createContext(initialValue);

export default GlobalStateContext;
