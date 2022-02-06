import { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { ThemeProvider } from 'styled-components'
import Switch from 'react-switch'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
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

        <Switch
          onChange={handleChangeTheme}
          checked={theme === 'dark'}
          checkedIcon={
            <div className="react-container-icon">
              <MdDarkMode />
            </div>
          }
          uncheckedIcon={
            <div className="react-container-icon">
              <MdLightMode />
            </div>
          }
          onColor="#21262D"
          offColor="#969cb3"
          className="react-switch"
        />
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
