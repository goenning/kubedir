import { CardGrid } from '@components/CardGrid'
import { Icon } from '@components/Icon'
import { AllTopics } from '@data'

export async function generateStaticParams() {
  return AllTopics.flatMap((topic) => {
    return topic.items.map((item) => ({
      slug: topic.id,
      id: item.id,
    }))
  })
}

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
        <h2 className="font-medium text-gray-800">Features</h2>
      </div>
      {!topic.features && (
        <span className="text-sm text-gray-600">
          This topic does not have any features yet.
        </span>
      )}
      <table>
        <tbody>
          {Object.entries(topic.features || {}).map(([key, feature], idx) => (
            <tr
              key={key}
              className={`border border-gray-500 ${
                idx % 2 === 0 ? '' : 'bg-gray-100'
              }`}
            >
              <td className="p-2">
                <span className="text-sm">{feature.title}</span>
                <span className="block text-xs text-gray-600">
                  {feature.description}
                </span>
              </td>
              <td className="min-w-[4rem] p-2 text-center">
                {item.features?.[key] || (
                  <span className="border-b border-dashed border-gray-600 text-sm text-gray-600">
                    Unknown
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <h2 className="font-medium text-gray-800">
          Alternatives to {item.title}:
        </h2>
      </div>
      <CardGrid topic={topic} items={otherAlternatives} />
    </>
  )
}
