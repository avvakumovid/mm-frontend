import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    access_token: string
}

const initialState: UserState = {
    access_token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload
        }
    }
})

export const { setToken } = userSlice.actions

export default userSlice.reducer