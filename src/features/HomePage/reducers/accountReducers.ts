
export type State = object;
export type Action = { type: 'set_account', payload: object };

export const initialState: State = { name: "", age: "", email: "", address: "" };

export const accountReducer = (state: State, action: Action) => {
  if (action.type === 'set_account') {
    return action.payload
  }
  return state;
}