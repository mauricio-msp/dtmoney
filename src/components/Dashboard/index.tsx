import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

import { DashBoardContainer } from './styles'

export function Dashboard() {
  return (
    <DashBoardContainer>
      <Summary />
      <TransactionsTable />
    </DashBoardContainer>
  )
}
