import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { useTransactions } from '../../context/TransactionProvider'

import { SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  const { transactions, lastTransaction } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryContent>
        <div>
          <header>
            <p>Entradas</p>
            <img src={income} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.deposits)}
          </strong>
          <p>
            {(lastTransaction(transactions, 'deposit') &&
              `Última entrada dia ${lastTransaction(transactions, 'deposit')}`) ||
              ''}
          </p>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcome} alt="Saídas" />
          </header>
          <strong>
            -{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.withdraws)}
          </strong>
          <p>
            {(lastTransaction(transactions, 'withdraw') &&
              `Última saida dia ${lastTransaction(transactions, 'withdraw')}`) ||
              ''}
          </p>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={total} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.total)}
          </strong>
        </div>
      </SummaryContent>
    </SummaryContainer>
  )
}
