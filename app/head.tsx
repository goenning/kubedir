import FaviconTags from '@components/FaviconTags'
import SEOTags from '@components/SEOTags'

export default function Head() {
  return (
    <>
      <SEOTags
        title="Discover your next Kubernetes tool - Kubedir"
        description="Compare and discover new tools to help you learn and manage Kubernetes cluster."
        url="https://kubedir.com"
      />
      <FaviconTags />
    </>
  )
}
