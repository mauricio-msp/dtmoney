import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { SwitchButton, Icon } from './styles'

type SwitchProps = {
  checked: boolean
  onChange: () => void
  checkedIcon?: boolean
  uncheckedIcon?: boolean
  checkedColor?: string | undefined
  uncheckedColor?: string | undefined
}

export function Switch({
  checked,
  onChange,
  checkedIcon = false,
  uncheckedIcon = false,
  checkedColor,
  uncheckedColor,
}: SwitchProps) {
  return (
    <SwitchButton checkedColor={checkedColor} uncheckedColor={uncheckedColor}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={checked ? 'checked' : ''}>
        {checked ? (
          <>
            {(checkedIcon && (
              <Icon style={{ justifyContent: 'flex-start' }}>
                <MdDarkMode />
              </Icon>
            )) ||
              ''}
          </>
        ) : (
          <>
            {(uncheckedIcon && (
              <Icon style={{ justifyContent: 'flex-end' }}>
                <MdLightMode />
              </Icon>
            )) ||
              ''}
          </>
        )}
      </span>
    </SwitchButton>
  )
}
