import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionProvider } from './context/TransactionProvider'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setInNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setInNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setInNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  )
}
