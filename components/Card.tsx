'use client'

import { Topic, TopicItem } from '../data'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  topic: Topic
  item: TopicItem
}

export function Card(props: Props) {
  const [src, setSrc] = useState(
    `/images/${props.topic.id}/${props.item.id}.png`
  )

  return (
    <a
      key={props.item.id}
      href={props.item.url}
      rel="nofollow"
      className="relative flex cursor-pointer items-start space-x-3 rounded border border-gray-300 bg-white px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div className="mt-2 flex-shrink-0">
        <Image
          width={200}
          height={200}
          className="h-8 w-8 rounded"
          src={src}
          onError={() => setSrc('/images/placeholder.png')}
          alt={`Logo for ${props.item.title}`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-gray-900">
          {props.item.title}
        </h3>
        <p className="text-xs text-gray-500">{props.item.description}</p>
      </div>
    </a>
  )
}
