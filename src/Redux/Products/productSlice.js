import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://crud-backend-y038.onrender.com/api/products'


export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await axios.get(API_URL)
  return response.data
})

export const createProduct = createAsyncThunk('createProduct', async (product) => {
  const response = await axios.post(API_URL, product)
  return response.data
})

export const updateProduct = createAsyncThunk('updateProduct', async (product) => {

  const { id, ...data } = product;
  const response = await axios.put(`${API_URL}/${id}`, data)
  return response.data
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id) => {
  await axios.delete(`${API_URL}/${id}`)
  return id
})


const productSlice = createSlice({
  name: 'products',
  initialState: { products: [], loading: false },
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.loading = false;
      })

     
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) state.products[index] = action.payload;
        state.loading = false;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.loading = false;
      })

      
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p._id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});


console.log(productSlice)



export default productSlice.reducer;
