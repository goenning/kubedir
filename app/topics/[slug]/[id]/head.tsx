import FaviconTags from '@components/FaviconTags'
import SEOTags from '@components/SEOTags'
import { AllTopics } from '@data'

export default function Head({
  params,
}: {
  params: { slug: string; id: string }
}) {
  const topic = AllTopics.find((topic) => topic.id === params.slug)
  if (!topic) return null

  const item = topic.items.find((item) => item.id === params.id)
  if (!item) return null

  const title = `${item.title} - ${topic.title} - Kubedir`
  const description = `${item.description} - Kubedir.`

  return (
    <>
      <SEOTags
        title={title}
        description={description}
        url={`https://kubedir.com/topics/${params.slug}/${params.id}`}
      />
      <FaviconTags />
    </>
  )
}
