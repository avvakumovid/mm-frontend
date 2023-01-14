import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../types'

export interface ILogin {
    username: string
    password: string
}

export interface ISingUp {
    firstName: string
    lastName: string
    email: string
    password: string
}
interface ILoginResponse {
    user: IUser
    token: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/auth' }),
    endpoints: builder => ({
        login: builder.query<ILoginResponse, ILogin>({
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
        }),
        singup: builder.query<ILoginResponse, ISingUp>({
            query: (body) => ({
                url: 'singup',
                method: 'POST',
                body
            }),
        }),
    })
})

export const { useLazyLoginQuery, useLazyAuthQuery, useLazySingupQuery } = userApi