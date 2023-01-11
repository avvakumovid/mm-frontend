export interface IUser {
    id: number
    firstName: string
    lastName: string
    email: string
    createdAt: string
    updatedAt: string
}

export type CategoryType = 'expense' | 'income'
export interface ICategory {
    id: number
    name: string
    image: string
    type: CategoryType
}

export interface ITransaction {
    id: number
    name: string
    amount: number
    category: ICategory
    createdAt: string
}


export interface ITransactionsByDate {
    createdAt: string
    incomes: number,
    expenses: number
}


export const periodArray = ['day', 'week', 'month', 'year'] as const;

export type period = typeof periodArray[number]

export interface GroupedTransaction {
    count: number
    total: number
    name: string
    type: CategoryType
    image: string
}