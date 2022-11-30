import { CardGrid } from '@components/CardGrid'
import { AllTopics } from '@data'
import { Fragment } from 'react'

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
          <div key={topic.id}>
            <div className="relative">
              <h2 className="font-medium text-gray-800">{topic.title}</h2>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
            <CardGrid key={topic.id} topic={topic} items={topic.items} />
          </div>
        ))}
      </div>
    </>
  )
}
