import { Card } from '@components/Card'
import { AllTopics } from '@data'

export default function Page({ params }: { params: { slug: string } }) {
  const topic = AllTopics.find((topic) => topic.id === params.slug)

  if (!topic) return null

  return (
    <>
      <div className="relative">
        <span className="text-xl text-gray-800">{topic.title}</span>
        <p className="text-sm text-gray-600">{topic.description}</p>
      </div>
      <div className="mt-2 grid max-w-6xl grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {topic.items.map((item) => (
          <Card key={item.id} topic={topic} item={item} />
        ))}
      </div>
    </>
  )
}
