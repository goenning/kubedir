import { Card } from '../components/Card'
import { AllTopics } from '../data'

export default function Home() {
  return (
    <>
      <div className="mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Directory for all things Kubernetes
        </h2>
        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Select a topic to get started.
        </p>
      </div>
      <div className="mt-10 space-y-8">
        {AllTopics.map((topic) => (
          <div key={topic.id}>
            <div className="relative">
              <span className="text-xl text-gray-800">{topic.title}</span>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
            <div className="mt-2 grid max-w-6xl grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {topic.items.map((item) => (
                <Card key={item.id} topic={topic} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
