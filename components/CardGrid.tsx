'use client'

import { Topic } from '@data'
import { useState } from 'react'
import { Card } from './Card'

type Props = {
  topic: Topic
}

export function CardGrid(props: Props) {
  const [showAll, setShowAll] = useState(false)

  const items =
    !showAll && props.topic.items.length > 6
      ? props.topic.items.slice(0, 5)
      : props.topic.items
  const otherItems =
    !showAll && props.topic.items.length > 6 ? props.topic.items.slice(5) : []

  return (
    <div>
      <div className="relative">
        <h2 className="font-medium text-gray-800">{props.topic.title}</h2>
        <p className="text-sm text-gray-600">{props.topic.description}</p>
      </div>
      <div className="mt-2 grid max-w-6xl grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} topic={props.topic} item={item} />
        ))}
        {otherItems.length > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="flex cursor-pointer items-center rounded border border-dashed border-gray-300 py-4 shadow-sm  focus-within:ring-indigo-700 hover:border-indigo-700 hover:text-indigo-700"
          >
            <div className="w-full text-center font-medium">
              Show {otherItems.length} more alternatives.
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
