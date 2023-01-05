import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from './../../types/index';

interface ILogin {
    username: string
    password: string
}

interface ILoginResponse {
    user: IUser
    token: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}auth` }),
    endpoints: builder => ({
        loginUser: builder.mutation<ILoginResponse, ILogin>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            })
        })
    })
})

export const { useLoginUserMutation } = authApi