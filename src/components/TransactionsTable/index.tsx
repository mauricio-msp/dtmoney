import { MdRemoveCircleOutline } from 'react-icons/md'

import { useTransactions } from '../../context/TransactionProvider'
import { NoTransactions } from '../NoTransactions'
import { TableContainer } from './styles'

export function TransactionsTable() {
  const { transactions, removeTransaction } = useTransactions()

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
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
  )
}
