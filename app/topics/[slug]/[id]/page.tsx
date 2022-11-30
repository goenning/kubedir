import { CardGrid } from '@components/CardGrid'
import { Icon } from '@components/Icon'
import { AllTopics } from '@data'

export default function Page({
  params,
}: {
  params: { slug: string; id: string }
}) {
  const topic = AllTopics.find((topic) => topic.id === params.slug)
  if (!topic) return null

  const item = topic.items.find((item) => item.id === params.id)
  if (!item) return null

  const otherAlternatives = topic.items.filter((i) => i.id !== item.id)

  return (
    <>
      <div className="flex">
        <Icon className="h-14 w-14 rounded" topic={topic} item={item} />
        <div className="ml-2">
          <div className="text-md tracking-tighter text-gray-600">
            {topic.title}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-800">
            {item.title}
          </h1>
        </div>
      </div>

      <div className="mt-2 max-w-4xl">
        <p className="text-md">{item.description}</p>
        <a
          rel="noreferrer noopener"
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
          href={item.url}
        >
          {item.url}
        </a>
      </div>

      <div className="mt-10">
        <h2 className="font-medium text-gray-800">
          Alternatives to {item.title}:
        </h2>
      </div>
      <CardGrid topic={topic} items={otherAlternatives} />
    </>
  )
}
