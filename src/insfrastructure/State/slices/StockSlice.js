import { createSlice } from '@reduxjs/toolkit'
const initialState = 0;

export const buyCarSlice = createSlice({
  name: 'buyCar',
  initialState,
  reducers: {
    incrementStock: (state,action) => {
      
    },
    decrementStock: (state,action) => {
      state.list[action.payload.id].quantity -= 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeDetail,destroyDetail,incrementStock,decrementStock } = buyCarSlice.actions

export default buyCarSlice.reducer