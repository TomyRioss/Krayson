import { createSlice } from '@reduxjs/toolkit'
import { BuyCar } from '../../../domain/models/BuyCar'
import { Detail } from '../../../domain/models/Detail';
import Service from '../../../domain/models/Service';

const initialState = {
  total: 0,
  details: []
}

export const buyCarSlice = createSlice({
  name: 'buyCar',
  initialState,
  reducers: {
    storeDetail: (state,action) => {
      const { id, description, price, image } = action.payload;

      const newDetail = {
          id: state.details.length,
          service: { id,description,price,image }, 
          quantity: 1,
          subtotal: price
      };

      const detail = state.details.find(detail => detail.service.id === newDetail.service.id);
      if(!detail){
        state.details.push(newDetail);
        return;
      }
      detail.quantity += 1;
      detail.subtotal = (detail.quantity * detail.service.price).toFixed(2);

    },
    destroyDetail: (state,action) => {
      state.details = state.details.filter(detail => detail.id !== action.payload);
    },
    incrementStock: (state,action) => {
      const detail = state.details.find(detail => detail.id === action.payload);
      if (detail) {
        detail.quantity += 1;
      }
      detail.subtotal = (detail.quantity * detail.service.price).toFixed(2);
    },
    decrementStock: (state,action) => {
      const detail = state.details.find(detail => detail.id === action.payload);
      if (detail) {
        detail.quantity -= 1;
      }
      detail.subtotal = (detail.quantity * detail.service.price).toFixed(2);
    },
    getTotal: (state,action) => {
      state.total = 0;
      if (state.details.length > 0) {
        state.details.map((item) => {
          state.total += item.quantity * item.service.price;
        })
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeDetail,destroyDetail,incrementStock,decrementStock,getTotal } = buyCarSlice.actions

export default buyCarSlice.reducer