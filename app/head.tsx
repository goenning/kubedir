import FaviconTags from '@components/FaviconTags'
import SEOTags from '@components/SEOTags'

export default function Head() {
  return (
    <>
      <SEOTags
        title="Discover your next Kubernetes tool - Kubedir"
        description="Compare and discover new Kubernetes tools, services and resources."
        url="https://kubedir.com"
      />
      <FaviconTags />
    </>
  )
}
