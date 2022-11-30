'use client'

import { Topic, TopicItem } from '@data'
import { useState } from 'react'
import { Card } from './Card'

type Props = {
  topic: Topic
  items: TopicItem[]
}

export function CardGrid(props: Props) {
  const [showAll, setShowAll] = useState(false)

  const items =
    !showAll && props.items.length > 6 ? props.items.slice(0, 5) : props.items
  const otherItems =
    !showAll && props.items.length > 6 ? props.items.slice(5) : []

  return (
    <div>
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
