import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

// Define the async action
export const fetchApiData = createAsyncThunk('api/fetchData', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  });


const apiSlice = createSlice({
    name:'api',
    initialState:{
        data:null,
        status:'idl',
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchApiData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchApiData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(fetchApiData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export default apiSlice.reducer;