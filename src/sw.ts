import { registerSW } from 'virtual:pwa-register'

registerSW({
  onOfflineReady() {},
  onNeedRefresh() {},
  onRegistered(r) {
    console.log('SW Registered: ' + r)
  },
  onRegisterError(error) {
    console.log('SW registration error', error)
  },
})
