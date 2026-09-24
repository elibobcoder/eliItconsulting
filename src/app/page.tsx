import { JSX } from 'react'
import dynamic from 'next/dynamic'

// components
import Stack from '@mui/material/Stack'
import PageLoader from '@/components/section-loader'

const HomeHero = dynamic(() => import('./_components/home-hero'), {
  loading: () => <PageLoader />,
})
const HomeTrust = dynamic(() => import('./_components/home-trust'), {
  loading: () => <PageLoader />,
})
const HomeServices = dynamic(() => import('./_components//home-services'), {
  loading: () => <PageLoader />,
})
const HomeTechStack = dynamic(() => import('./_components/home-tech-stack'), {
  loading: () => <PageLoader />,
})
const HomeOutsourcing = dynamic(
  () => import('./_components/home-outsourcing'),
  {
    loading: () => <PageLoader />,
  }
)
const HomePartnership = dynamic(
  () => import('./_components/home-partnership'),
  {
    loading: () => <PageLoader />,
  }
)
const HomeSupport = dynamic(() => import('./_components/home-support'), {
  loading: () => <PageLoader />,
})
const HomeTestimonials = dynamic(
  () => import('./_components/home-testimonials'),
  {
    loading: () => <PageLoader />,
  }
)
const HomeHiring = dynamic(() => import('./_components/home-hiring'), {
  loading: () => <PageLoader />,
})
const HomeContact = dynamic(() => import('./_components/home-contact'), {
  loading: () => <PageLoader />,
})

const HomePage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <HomeHero />
      <HomeTrust />
      <HomeServices />
      <HomeTechStack />
      <HomeOutsourcing />
      <HomePartnership />
      <HomeSupport />
      <HomeTestimonials />
      <HomeHiring />
      <HomeContact />
    </Stack>
  )
}

export default HomePage
