import { useTransactions } from '../../context/TransactionProvider'
import { NoTransactionsContainer } from './styles'

export function NoTransactions() {
  return (
    <NoTransactionsContainer>
      <p className="no-transactions">Nenhuma transação foi realizada no momento.</p>
    </NoTransactionsContainer>
  )
}
