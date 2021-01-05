export const InitialState = {};

export interface IAction {
  type: 'set' | 'clear' | undefined;
  payload: { name: string; value?: unknown };
}
export type IState = any;

const GlobalStateReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'set':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'clear':
      return { ...state, [action.payload.name]: undefined };
    default:
      return state;
  }
};

export default GlobalStateReducer;
