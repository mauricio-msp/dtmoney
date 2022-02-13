import { useMemo, useState } from 'react'
import { MdRemoveCircleOutline } from 'react-icons/md'

import { Input } from '../Input'
import { NoTransactions } from '../NoTransactions'

import { useTransactions } from '../../context/TransactionProvider'
import { TableContainer } from './styles'

export function TransactionsTable() {
  const [filter, setFilter] = useState('')
  const { transactions, removeTransaction } = useTransactions()

  const transactionsFilter = useMemo(() => {
    const filtered = transactions.filter(({ title, category }) => {
      const filterTransaction = filter
        ? title.toLowerCase().includes(filter.toLocaleLowerCase()) ||
          category.toLowerCase().includes(filter.toLocaleLowerCase())
        : true

      return filterTransaction
    })

    return filtered
  }, [filter, transactions])

  return (
    <>
      <Input
        label="filter"
        name="filter"
        placeholder="Buscar transação por título ou categoria "
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{
          marginTop: '1rem',
          maxWidth: 395,
        }}
      />
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {transactionsFilter.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' ? '- ' : ''}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                <td>
                  <MdRemoveCircleOutline
                    onClick={() => removeTransaction(transaction.id)}
                    style={{ fontSize: 28, color: '#E52e54', paddingTop: 8, cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!transactions.length && <NoTransactions />}
      </TableContainer>
    </>
  )
}
