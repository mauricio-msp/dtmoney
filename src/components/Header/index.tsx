import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
