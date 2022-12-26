import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts} from './operations'
// import { nanoid } from 'nanoid';

const initialState = {
    items: [],
    isLoading: false,
    error: null
  };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContacts: {
  //     reducer(state, action) {
  //       state.value.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContacts(state, action) {
  //     const index = state.value.findIndex(value => value.id === action.payload);
  //     state.value.splice(index, 1);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = {
//   value: [],
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.value.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       const index = state.value.findIndex(value => value.id === action.payload);
//       state.value.splice(index, 1);
//     },
//   },
// });

// export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;