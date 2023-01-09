import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from './authService'

export const login = createAsyncThunk("auth/login", async({formDetails, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.signIn(formDetails)
        toast.success('Login Successfully');
        navigate('/');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const register = createAsyncThunk("auth/register", async({formData, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.signUp(formData)
        toast.success('Registered Successfully please Login');
        navigate('/login');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const initialState = {
    user: null,
    error: "",
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [register.pending]: (state, action) => {
            state.loading = true
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default authSlice.reducer