import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { TransactionsCard } from '../TransactionsCard'

import { useViewport } from '../../hooks/useViewport'
import { DashBoardContainer } from './styles'

export function Dashboard() {
  const viewport = useViewport()
  const isMobile = viewport.width < 930

  return (
    <DashBoardContainer>
      <Summary />
      {isMobile ? <TransactionsCard /> : <TransactionsTable />}
    </DashBoardContainer>
  )
}
