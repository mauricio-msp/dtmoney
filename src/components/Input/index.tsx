import { InputHTMLAttributes } from 'react'
import { InputControl } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <InputControl>
      <label htmlFor={label}>
        <input name={name} id={label} {...rest} />
      </label>
    </InputControl>
  )
}
