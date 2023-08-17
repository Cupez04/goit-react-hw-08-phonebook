import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Base con la cual se hace la consulta
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";


//Add JWT to the reponse
const attachAccessToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//Clear JWT
const clearAttachAccessToken = () => {
    axios.defaults.headers.common.Authorization= '';
}

// Registro con parametros de name, pasword y email

export const register = createAsyncThunk (
    'auth/register',
    async(credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            attachAccessToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

//Apartado para el Login------------------------------------------
export const login = createAsyncThunk(
    'auth/login',
    async(credentials, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", credentials);
            attachAccessToken(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//----------LOGOUT---------
export const logout = createAsyncThunk(
    'auth/logout',
    async(_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            clearAttachAccessToken();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//-----------Refresh---------------

export const refresh = createAsyncThunk (
    'auth/refresh',
    async(_, thunkAPI)=> {
        const persistedToken = thunkAPI.getState().auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('there is no token to fetch');
        }
        try{
            attachAccessToken(persistedToken);
            const response = await axios.get("/users/current");
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);