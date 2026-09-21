import { ReactElement } from 'react'

declare global {
  interface IMenu {
    label: string
    path: string
    icon?: ReactElement
  }

  interface IMegaMenuLinkColumn {
    heading: string
    links: { label: string; path: string }[]
  }

  interface IMegaMenuTagColumn {
    heading: string
    tags: string[]
  }

  interface IMegaMenuIntro {
    title: string
    description: string
    descriptionLinkLabel?: string
    descriptionLinkPath?: string
    ctaLabel: string
    ctaPath: string
    quickLinks?: { label: string; path: string }[]
  }
}

export {}
