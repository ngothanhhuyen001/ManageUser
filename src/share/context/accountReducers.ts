export type State = { name : "", age: "", email: "", address: "" , password :""};
export type Action =
  | { type: "set_account"; payload: State }
  | { type: "update_field"; payload: { key: string; value: string } };

export const initialState: State = JSON.parse(
  localStorage.getItem("account") || ""
);
export const accountReducer = (state: State, action: Action) => {
  let updatedUser: State;

  switch (action.type) {
    case "set_account":
      updatedUser = { ...state, ...action.payload };
      localStorage.setItem("account", JSON.stringify(updatedUser));
      break;

    case "update_field":
      updatedUser = {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      localStorage.setItem("account", JSON.stringify(updatedUser));
      break;

    default:
      return state;
  }

  return updatedUser;
};
