import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/index";

const initialState: { users: User[] } = {
  users: [
    {
      key: 1,
      name: 'John Brown',
      age: '32',
      email: 'jonhbrown@gmail.com',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: '42',
      email: 'jimgreen@yahoo.com',
      address: 'London No. 1 Lake Park',
    },
    {
      key: 3,
      name: 'Joe Black',
      age: '32',
      email: 'joeblack.32@gmail.com',
      address: 'Sydney No. 1 Lake Park',
    },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
		createUser(state, action: PayloadAction<User>){
			state.users.push(action.payload);
		},
		updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(u => u.key === action.payload.key);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(u => u.key !== action.payload);
    },
		searchUser(state, action: PayloadAction<string>){
			state.users = state.users.filter(u =>u.name.toLowerCase().includes(action.payload.toLowerCase()))
		},
  },
});

export const { updateUser, createUser, deleteUser, searchUser} = userSlice.actions;
export default userSlice.reducer;

