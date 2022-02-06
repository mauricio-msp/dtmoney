import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

type Transaction = {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionProviderProps = {
  children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
    const { transaction } = response.data

    setTransactions(oldTransactions => [...oldTransactions, transaction])
    window.localStorage.setItem('transactions', JSON.stringify([...transactions, transaction]))
  }

  useEffect(() => {
    // api.get('transactions').then(response => setTransactions(response.data.transactions))

    const localTransactions = window.localStorage.getItem('transactions')

    if (localTransactions) setTransactions(JSON.parse(localTransactions))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionContext)
}
