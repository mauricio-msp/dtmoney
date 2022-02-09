import { MdRemoveCircleOutline } from 'react-icons/md'

import { useTransactions } from '../../context/TransactionProvider'
import { NoTransactions } from '../NoTransactions'

import { CardContainer, CardContent } from './styles'

export function TransactionsCard() {
  const { transactions, removeTransaction } = useTransactions()

  return (
    <CardContainer>
      <header>
        <h1>Listagem</h1>
        <span>{transactions.length} itens</span>
      </header>

      <CardContent>
        {transactions.map(transaction => (
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
  )
}
