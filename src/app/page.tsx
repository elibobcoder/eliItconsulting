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
const HomeMotivation = dynamic(
  () => import('./_components/home-our-motivation'),
  {
    loading: () => <PageLoader />,
  }
)
const HomeTestimonials = dynamic(
  () => import('./_components/home-testimonials'),
  {
    loading: () => <PageLoader />,
  }
)
const HomeValuePillars = dynamic(
  () => import('./_components/home-value-pillars'),
  {
    loading: () => <PageLoader />,
  }
)
const HomeCTA = dynamic(() => import('./_components/home-cta'), {
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
      <HomeMotivation />
      <HomeTestimonials />
      <HomeValuePillars />
      <HomeCTA />
      <HomeContact />
    </Stack>
  )
}

export default HomePage
