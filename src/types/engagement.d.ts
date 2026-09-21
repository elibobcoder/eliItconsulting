declare global {
  interface IEngagementHowCard {
    title: string
    description: string
  }

  interface IEngagementRelated {
    slug: string
    title: string
    description: string
  }

  interface IEngagementModel {
    slug: string
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    highlights: [string, string]
    ctaLabel: string
    photo: string
    whyEyebrow: string
    whyTitle: string
    whyIntro: string
    benefits: string[]
    whySupport: string
    howTitle: string
    howIntro: string
    howCards: IEngagementHowCard[]
    related: IEngagementRelated[]
  }
}

export {}
