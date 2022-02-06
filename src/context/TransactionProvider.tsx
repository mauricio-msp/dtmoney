import { createContext, useContext, useEffect, useState } from 'react'
// import { api } from '../services/api'

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
  createTransaction: (transaction: TransactionInput) => void
  removeTransaction: (id: number) => void
  lastTransaction: (transactions: Transaction[], type: 'deposit' | 'withdraw') => string | null
}

type TransactionProviderProps = {
  children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  function createTransaction(transactionInput: TransactionInput) {
    // const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
    // const transaction = response.data

    const transaction = {
      ...transactionInput,
      id: transactions.length + 1,
      createdAt: String(new Date()),
    }

    setTransactions(prevTransactions => [...prevTransactions, transaction])
  }

  function removeTransaction(transactionId: number) {
    const newTransactions = transactions.filter(
      (transaction: Transaction) => transaction.id !== transactionId,
    )

    setTransactions(newTransactions)
  }

  function lastTransaction(
    transactions: Transaction[],
    type: 'deposit' | 'withdraw',
  ): string | null {
    if (!transactions.length) return null

    const transaction = transactions.filter((transaction: Transaction) => transaction.type === type)

    if (!transaction.length) return null

    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long' }).format(
      new Date(transaction[transaction.length - 1].createdAt),
    )
  }

  useEffect(() => {
    // api.get('transactions').then(response => setTransactions(response.data.transactions))

    const localTransactions = window.localStorage.getItem('@dtmoney:transactions')

    if (localTransactions) setTransactions(JSON.parse(localTransactions))
  }, [])

  useEffect(() => {
    if (transactions)
      window.localStorage.setItem('@dtmoney:transactions', JSON.stringify(transactions))
  }, [transactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, createTransaction, removeTransaction, lastTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionContext)
}
