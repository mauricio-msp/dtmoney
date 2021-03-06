import { ChangeEvent, FormEvent, useState } from 'react'
import Modal from 'react-modal'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import close from '../../assets/close.svg'

import { useTransactions } from '../../context/TransactionProvider'

import { Form, ButtonGroupType, ButtonType } from './styles'
import { Input } from '../Input'

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

        <Input
          type="text"
          label="title"
          name="title"
          placeholder="Título"
          value={input.title}
          onChange={handleChangeInput}
        />
        <Input
          type="number"
          label="amount"
          name="amount"
          placeholder="Valor"
          value={input.amount}
          onChange={handleChangeInput}
        />

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

        <Input
          type="text"
          label="category"
          name="category"
          placeholder="Categoria"
          value={input.category}
          onChange={handleChangeInput}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
