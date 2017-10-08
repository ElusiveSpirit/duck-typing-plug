import { refs } from '@/firebase'

const REFERRAL_LINK_KEY = 'ref'

if (location.search !== '') {
  const queryParams = location.search.slice(1).split('&').map(el => el.split('='))

  queryParams.forEach(el => {
    const [key, value] = el
    if (key === REFERRAL_LINK_KEY) {
      refs.refLinks.push({
        link: value,
        date: new Date().toUTCString()
      })
    }
  })
}
