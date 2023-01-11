import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupedTransaction, ISumSpends, ITransaction, ITransactionsByDate, period } from './../../types/index';


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
                    ...getAuthHeader(props.token)
                }
            })
        }),
        groupedTransactions: builder.query<GroupedTransaction[], string>({
            query: token => ({
                url: '/group',
                headers: {
                    ...getAuthHeader(token)
                }
            })
        }),
        sumSpends: builder.query<ISumSpends[], string>({
            query: token => ({
                url: '/sum',
                headers: {
                    ...getAuthHeader(token)
                }
            })
        })
    })
})

const getAuthHeader = (token: string) => {
    return { Authorization: `Bearer ${token}` }
}

export const {
    useTransactionsQuery,
    useTransactionsByDateQuery,
    useGroupedTransactionsQuery,
    useSumSpendsQuery
} = transactionsApi