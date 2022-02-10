import { useState, useRef, useLayoutEffect, useMemo } from 'react'

function getVpWidth() {
  return typeof window !== 'undefined'
    ? Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0)
    : 0
}

function getVpHeight() {
  return typeof window !== 'undefined'
    ? Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0)
    : 0
}

let listeners = new Set()
let vpW = getVpWidth()
let vpH = getVpHeight()

function onResize() {
  vpW = getVpWidth()
  vpH = getVpHeight()

  listeners.forEach((listener: any) => {
    listener({ vpWidth: vpW, vpHeight: vpH })
  })
}

export function useViewport(debounce: any = false) {
  const [{ vpWidth, vpHeight }, setState] = useState(() => ({
    vpWidth: vpW,
    vpHeight: vpH,
  }))
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const listener = useMemo(
    () =>
      !debounce
        ? (state: any) => setState(state)
        : (state: any) => {
            if (timeout.current) clearTimeout(timeout.current)

            timeout.current = setTimeout(() => setState(state), debounce)
          },
    [debounce, setState],
  )

  useLayoutEffect(() => {
    listeners.add(listener)

    if (window && listeners.size === 1) {
      window.addEventListener('resize', onResize)
      onResize()
    }

    return () => {
      listeners.delete(listener)

      if (listeners.size === 0) window.removeEventListener('resize', onResize)
    }
  }, [])

  return { width: vpWidth, height: vpHeight, onResize }
}
