import { useBackToTop } from 'valaxy'

export function scrollToTop() {
  const { backToTop } = useBackToTop()
  backToTop?.()
}
