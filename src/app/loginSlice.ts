import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

import { toast } from 'react-toastify';

export const fetchLogin = createAsyncThunk('login/fetchLogin', async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typ5icode.com/posts'
    );
    return response.data;
});

export interface ILoginData {
    position?: string;
    userId?: string;
    name?: string;
    lastName?: string;
    kodmelli?: string;
    phone?: string;
    birthday?: string | Date;
}

export interface ILoginState {
    status: 'idle' | 'loading' | 'success' | 'error';
    data: ILoginData;
}

const initialState: ILoginState = {
    status: 'idle',
    data: {},
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
                toast.info(
                    'info Notification info Notificationinfo Notification!'
                );
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'success';
                console.log(action.payload);

                state.data = action.payload;

                toast.success('Success Notification !');
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.status = 'error';
                toast.error('error Notification !');
            });
    },
});

export const loginStatusSelector = () => (state: RootState) =>
    state.login.status;

export const loginDataSelector = () => (state: RootState) => state.login.data;

export default loginSlice.reducer;
