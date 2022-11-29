import FaviconTags from '../../../components/FaviconTags'
import { AllTopics } from '../../../data'

export default function Head({ params }: { params: { slug: string } }) {
  const topic = AllTopics.find((topic) => topic.id === params.slug)
  if (!topic) return null

  const title = `${topic.title} - Kubedir`

  return (
    <>
      <title>{title}</title>
      <FaviconTags />
    </>
  )
}
