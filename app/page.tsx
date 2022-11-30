import { CardGrid } from '@components/CardGrid'
import { AllTopics } from '@data'

export default function Home() {
  return (
    <>
      <div className="mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-left">
          Directory for all things Kubernetes
        </h2>
        <p className="max-w-xl text-center text-lg leading-8 text-gray-600 md:text-left">
          Select a topic to get started.
        </p>
      </div>
      <div className="mt-10 space-y-8">
        {AllTopics.map((topic) => (
          <CardGrid key={topic.id} topic={topic} />
        ))}
      </div>
    </>
  )
}
