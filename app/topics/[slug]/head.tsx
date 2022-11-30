import FaviconTags from '@components/FaviconTags'
import SEOTags from '@components/SEOTags'
import { AllTopics } from '@data'

export default function Head({ params }: { params: { slug: string } }) {
  const topic = AllTopics.find((topic) => topic.id === params.slug)
  if (!topic) return null

  const title = `${topic.title} - Kubedir`
  const description = `${topic.description}. There are ${topic.items.length} alternatives for ${topic.title} on Kubedir.`

  return (
    <>
      <SEOTags
        title={title}
        description={description}
        url={`https://kubedir.com/topics/${params.slug}`}
      />
      <FaviconTags />
    </>
  )
}
