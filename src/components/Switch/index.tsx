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
    <SwitchButton htmlFor="switch" checkedColor={checkedColor} uncheckedColor={uncheckedColor}>
      <input type="checkbox" id="switch" checked={checked} onChange={onChange} />
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
