import { ICONS } from '../constants'

const getIcon = name => {
  let icon

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER
      break
    case 'github':
      icon = ICONS.GITHUB
      break
    case 'linkedin':
      icon = ICONS.LINKEDIN
      break
    case 'facebook':
      icon = ICONS.FACEBOOK
      break
    case 'telegram':
      icon = ICONS.TELEGRAM
      break
    case 'email':
      icon = ICONS.EMAIL
      break
    case 'rss':
      icon = ICONS.RSS
      break
    default:
      icon = {}
      break
  }

  return icon
}

export default getIcon
