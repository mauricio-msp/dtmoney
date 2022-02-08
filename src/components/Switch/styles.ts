import styled from 'styled-components'

type StwitchButtonProps = {
  checkedColor: string | undefined
  uncheckedColor: string | undefined
}

export const SwitchButton = styled.label<StwitchButtonProps>`
  position: absolute;
  display: inline-block;
  width: 3.75rem;
  height: 2.125rem;

  top: 1rem;
  right: 1rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;

    background-color: ${props => props.uncheckedColor || '#CCC'};
    transition: 0.3s;
    border-radius: 1.75rem;
    text-align: right;
    padding: 0 0.5rem;

    &:before {
      position: absolute;
      content: '';

      width: 1.625rem;
      height: 1.625rem;

      left: 0.25rem;
      bottom: 0.25rem;

      background-color: #fff;
      border-radius: 50%;

      transition: 0.3s;
    }
  }

  input:checked + span {
    background-color: ${props => props.checkedColor || '#33CC95'};
    text-align: left;
  }

  input:checked + span:before {
    transform: translateX(1.625rem);
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.25rem;
  padding-bottom: 1px;
  color: #f6b803;
`
