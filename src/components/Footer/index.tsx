import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <p>
        by <span>Maurício Porfírio</span>, {new Date().getFullYear()}
      </p>
    </FooterContainer>
  )
}
