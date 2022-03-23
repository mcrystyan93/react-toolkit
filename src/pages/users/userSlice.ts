import { createSlice } from "@reduxjs/toolkit";

interface UsersState {
  users: Payload<Array<User>>;
  selectedUser: Payload<Partial<User>>;
};
const initialState: UsersState = {
  users: { loading: true, value: [] },
  selectedUser: { loading: false, value: null }
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    load: (state) =>{
      
    }
  }
});