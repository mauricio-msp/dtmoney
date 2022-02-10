import { ChangeEvent, FormEvent, useState } from 'react'
import Modal from 'react-modal'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'

import { useTransactions } from '../../context/TransactionProvider'

import { Form, ButtonGroupType, ButtonType } from './styles'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const isDarkMode = window.localStorage.getItem('@dtmoney:theme') || 'dark'
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [input, setInput] = useState({ title: '', amount: 0, category: '' })

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  function handleSubmitNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      ...input,
      amount: Number(input.amount),
      type,
    })

    setInput({ title: '', amount: 0, category: '' })
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={500}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={close} alt="Fechar modal" />
      </button>

      <Form onSubmit={handleSubmitNewTransaction}>
        <h2>Cadastrar transação</h2>

        <label htmlFor="title">
          <input
            placeholder="Título"
            name="title"
            id="title"
            value={input.title}
            onChange={handleChangeInput}
          />
        </label>
        <label htmlFor="amount">
          <input
            type="number"
            placeholder="Valor"
            name="amount"
            id="amount"
            value={input.amount}
            onChange={handleChangeInput}
          />
        </label>

        <ButtonGroupType>
          <ButtonType
            type="button"
            onClick={() => setType('deposit')}
            isDarkMode={isDarkMode === 'dark'}
            isActive={type === 'deposit'}
            activeColor="#33CC95"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>
          <ButtonType
            type="button"
            onClick={() => setType('withdraw')}
            isDarkMode={isDarkMode === 'dark'}
            isActive={type === 'withdraw'}
            activeColor="#E52e54"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </ButtonType>
        </ButtonGroupType>
        <label htmlFor="category">
          <input
            placeholder="Categoria"
            name="category"
            id="category"
            value={input.category}
            onChange={handleChangeInput}
          />
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
