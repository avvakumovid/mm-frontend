import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITransaction, ITransactionsByDate, period } from './../../types/index';


export const transactionsApi = createApi({
    reducerPath: 'transactionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/spend' }),
    endpoints: builder => ({
        transactions: builder.query<ITransaction[], { categoryId?: string, token: string }>({
            query: (props) => ({
                url: `/${props.categoryId ?? ''}`,
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            })
        }),
        transactionsByDate: builder.query<ITransactionsByDate[], { period: period, token: string }>({
            query: props => ({
                url: `/date?period=${props.period}`,
                headers: {
                    Authorization: `Bearer ${props.token}`
                }
            })
        })
    })
})

export const { useTransactionsQuery, useTransactionsByDateQuery } = transactionsApi