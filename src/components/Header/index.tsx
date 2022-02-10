import { MdOutlineAddCircleOutline } from 'react-icons/md'

import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          <MdOutlineAddCircleOutline style={{ fontSize: 22 }} /> Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
