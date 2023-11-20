import socialConfig from '@config/social.json'

type SocialItem = {
    url: string
    icon: string
}

type SocialData = {
    [key: string]: SocialItem
}

export const socialData: SocialData = socialConfig
