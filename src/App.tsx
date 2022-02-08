import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { Switch } from './components/Switch'

import { TransactionProvider } from './context/TransactionProvider'

import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

Modal.setAppElement('#root')

export function App() {
  const [theme, setTheme] = useState(() => {
    const storageTheme = window.localStorage.getItem('@dtmoney:theme')

    if (storageTheme) return storageTheme

    return 'dark'
  })
  const [isNewTransactionModalOpen, setInNewTransactionModalOpen] = useState(false)

  function handleChangeTheme() {
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
  }

  function handleOpenNewTransactionModal() {
    setInNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setTimeout(() => {
      setInNewTransactionModalOpen(false)
    }, 500)
  }

  useEffect(() => {
    window.localStorage.setItem('@dtmoney:theme', theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <TransactionProvider>
        <GlobalStyle />

        <Switch checked={theme === 'dark'} onChange={handleChangeTheme} checkedIcon uncheckedIcon />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionProvider>
    </ThemeProvider>
  )
}
