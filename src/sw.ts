import { useRegisterSW } from 'virtual:pwa-register/react'

useRegisterSW({
  onOfflineReady() {},
  onNeedRefresh() {},
  onRegistered(r) {
    console.log('SW Registered: ' + r)
  },
  onRegisterError(error) {
    console.log('SW registration error', error)
  },
})
