import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../types'

export interface login {
    username: string
    password: string
}

interface loginResponse {
    user: IUser
    token: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/auth' }),
    endpoints: builder => ({
        login: builder.query<loginResponse, login>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body
            }),
        }),
        auth: builder.query<IUser, string>({
            query: (token) => ({
                url: '/',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    })
})

export const { useLazyLoginQuery, useLazyAuthQuery } = userApi