export interface IUser {
    id: number
    firstName: string
    lastName: string
    email: string
    createdAt: string
    updatedAt: string
}

export interface ICategory {
    id: number
    name: string
    image: string
    type: 'expense' | 'income'
}

export interface ITransaction {
    id: number
    name: string
    amount: number
    category: ICategory
    createdAt: string
}