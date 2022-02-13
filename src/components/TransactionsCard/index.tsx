import { useMemo, useState } from 'react'
import { MdRemoveCircleOutline } from 'react-icons/md'

import { Input } from '../Input'
import { NoTransactions } from '../NoTransactions'

import { useTransactions } from '../../context/TransactionProvider'
import { CardContainer, CardContent } from './styles'

export function TransactionsCard() {
  const [filter, setFilter] = useState('')
  const { transactions, removeTransaction } = useTransactions()

  const transactionsFilter = useMemo(() => {
    const filtered = transactions.filter(({ title, category }) => {
      const filterTransaction =
        title.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        category.toLowerCase().includes(filter.toLocaleLowerCase())

      return filterTransaction
    })

    return filtered
  }, [filter])

  return (
    <>
      <Input
        label="filter"
        name="filter"
        placeholder="Buscar transação por título ou categoria"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{
          margin: '1.5rem 0',
        }}
      />
      <CardContainer>
        <header>
          <h1>Listagem</h1>
          <span>{transactionsFilter.length} itens</span>
        </header>

        <CardContent>
          {transactionsFilter.map(transaction => (
            <div key={transaction.id}>
              <p>
                {transaction.title}
                <MdRemoveCircleOutline
                  onClick={() => removeTransaction(transaction.id)}
                  style={{ fontSize: 22, color: '#E52e54', cursor: 'pointer' }}
                />
              </p>
              <span className={transaction.type}>
                {transaction.type === 'withdraw' ? '- ' : ''}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </span>
              <footer>
                <span>{transaction.category}</span>
                <span>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                </span>
              </footer>
            </div>
          ))}
        </CardContent>

        {!transactions.length && <NoTransactions />}
      </CardContainer>
    </>
  )
}
