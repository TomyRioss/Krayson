import { createSlice } from '@reduxjs/toolkit'
import { Detail } from '../../../domain/models/Detail';

const initialState = new Detail(0,null,0)

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    storeService: (state,action) => {
        const service = action.payload;
        state.product = new Service(service.id,service.price,service.description,service.image,1);
        return state.product;
    },
    incrementStock: (state,action) => {
        state.quantity += 1;
    },
    decrementStock: (state,action) => {
        state.quantity -= 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeService,incrementStock,decrementStock } = detailSlice.actions

export default detailSlice.reducer