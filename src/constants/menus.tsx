// components
import Box from '@mui/material/Box'

// icons
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import FolderOutlinedIcon from '@/assets/icons/fluent--folder-32-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import ContactSupportOutlinedIcon from '@/assets/icons/material-symbols--contact-support-outline-rounded.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import EmailOutlinedIcon from '@/assets/icons/eva--email-outline.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'
import ConversationOutlinedIcon from '@/assets/icons/ci--chat-conversation.svg'

export const companyMenus: IMenu[] = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <Box component={HomeOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Services',
    path: '/services',
    icon: (
      <Box component={LayersOutlinedIcon} sx={{ width: 20, height: 'auto' }} />
    ),
  },
  {
    label: 'Our Work',
    path: '/portfolio',
    icon: (
      <Box component={FolderOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: (
      <Box component={ContactOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Career',
    path: '/career',
    icon: (
      <Box component={WorkOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'About',
    path: '/about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

export const aboutDropdownLinks: IMenu[] = [
  {
    label: 'About Us',
    path: '/about',
    icon: (
      <Box component={InfoOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Careers',
    path: '/career',
    icon: (
      <Box component={WorkOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
]

export const servicesMegaMenu: {
  intro: IMegaMenuIntro
  columns: IMegaMenuLinkColumn[]
} = {
  intro: {
    title: 'Services',
    description: 'Get',
    descriptionLinkLabel: 'software development services',
    descriptionLinkPath: '/services',
    ctaLabel: 'All Services',
    ctaPath: '/services',
    quickLinks: [
      { label: 'Staff Augmentation', path: '/services/staff-augmentation' },
      { label: 'Dedicated Teams', path: '/services/dedicated-teams' },
      { label: 'Software Outsourcing', path: '/services/software-outsourcing' },
      { label: 'AI Transformation', path: '/services/ai-transformation' },
    ],
  },
  columns: [
    {
      heading: 'CORE SERVICES',
      links: [
        { label: 'Web Development', path: '/services#dev' },
        { label: 'Digital Marketing', path: '/services#marketing' },
        { label: 'E-commerce Solutions', path: '/services#e-commerce' },
      ],
    },
    {
      heading: 'SPECIALIZED',
      links: [
        { label: 'Branding & Graphic Design', path: '/services#branding' },
        { label: 'Consulting & Strategy', path: '/services#consulting' },
        { label: 'AI & Machine Learning', path: '/services#ai' },
      ],
    },
    {
      heading: 'MORE SERVICES',
      links: [
        { label: 'Cloud Solutions', path: '/services#cloud' },
        { label: 'Mobile App Development', path: '/services#mobile' },
        { label: 'SEO & Analytics', path: '/services#seo' },
      ],
    },
  ],
}

export const technologiesMegaMenu: {
  intro: IMegaMenuIntro
  columns: IMegaMenuTagColumn[]
} = {
  intro: {
    title: 'Technologies',
    description: 'Get experts in 20+ technologies. Cover any tech stack.',
    ctaLabel: 'All Technologies',
    ctaPath: '/services',
    quickLinks: [
      { label: 'Hire Software Developers', path: '/hire-developers' },
      { label: 'Top 1% Talent', path: '/top-talent' },
    ],
  },
  columns: [
    {
      heading: 'FRONT-END',
      tags: ['Angular', 'JavaScript', 'React', 'TypeScript', 'Vue.js'],
    },
    {
      heading: 'BACK-END',
      tags: [
        '.NET',
        'C#',
        'Django',
        'Golang',
        'Java',
        'Node.js',
        'PHP',
        'Python',
        'Ruby',
      ],
    },
    {
      heading: 'CLOUD & PLATFORMS',
      tags: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Power BI', 'Salesforce'],
    },
    {
      heading: 'AI, DATA & MOBILE',
      tags: ['AI', 'C++', 'Kotlin', 'Machine Learning', 'Xamarin'],
    },
  ],
}

export const industriesMegaMenu: {
  intro: IMegaMenuIntro
  columns: IMegaMenuTagColumn[]
} = {
  intro: {
    title: 'Industries',
    description:
      "We've worked across many sectors. Experience in yours? We probably have it.",
    ctaLabel: 'Get in Touch',
    ctaPath: '/contact',
  },
  columns: [
    {
      heading: '',
      tags: ['Startups', 'Fintech', 'Healthcare', 'Retail & E-commerce'],
    },
    {
      heading: '',
      tags: ['Logistics', 'Professional Services', 'Real Estate', 'Education'],
    },
  ],
}

export const supportLinks: IMenu[] = [
  {
    label: 'Help Center',
    path: '/help-center',
    icon: (
      <Box
        component={ContactSupportOutlinedIcon}
        sx={{ width: 22, height: 'auto' }}
      />
    ),
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
    icon: (
      <Box component={EmailOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },

  {
    label: 'Terms of Services',
    path: '/terms-of-services',
    icon: (
      <Box component={PaperOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Privacy Policy',
    path: '/privacy-policy',
    icon: (
      <Box component={ShieldOutlinedIcon} sx={{ width: 18, height: 'auto' }} />
    ),
  },
  {
    label: 'Live Chat',
    path: '/live-chat',
    icon: (
      <Box
        component={ConversationOutlinedIcon}
        sx={{ width: 18, height: 'auto' }}
      />
    ),
  },
]
