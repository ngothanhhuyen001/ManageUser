import ManageUsers from './index';
import reducer, { initialState } from './userSlice';
import { render } from '@testing-library/react';

describe('userSlice', () => {
  const userA = { key: 1, name: 'John Brown', age: '32', email: 'jonhbrown@gmail.com', address: 'New York No. 1 Lake Park', status: 'active', };
  const userB = { key: 2, name: 'Jim Green', age: '42', email: 'jimgreen@yahoo.com', address: 'London No. 1 Lake Park', status: 'inactive' };
  const userC = { key: 3, name: 'Joe Black', age: '32', email: 'joeblack.32@gmail.com', address: 'Sydney No. 1 Lake Park', status: 'active', };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown_action' })).toEqual(initialState);
  });

  it('should handle add', () => {
    const prevState = { users: [userA, userC] };
    console.log(prevState)
    console.log(reducer(prevState, { type: 'user/createUser', payload: userB }))
    expect(reducer(prevState, { type: 'user/createUser', payload: userB })).toEqual({
      users: [userA, userC, userB]
    });
  });

  it('should handle edit', () => {
    const edited = { ...userA, name: 'John Updated' };
    const prevState = { users: [userA] };
    expect(reducer(prevState, { type: "user/updateUser", payload: edited })).toEqual({
      users: [edited],
    });
  });

  it('should handle delete', () => {
    const prevState = { users: [userA, userB, userC] };
    expect(reducer(prevState, { type: 'user/deleteUser', payload: userA.key })).toEqual({
      users: [userB, userC],
    });
  });
})

