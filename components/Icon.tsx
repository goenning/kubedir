'use client'

import { Topic, TopicItem } from '@data'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  topic: Topic
  item: TopicItem
  className?: string
}

export function Icon(props: Props) {
  const [src, setSrc] = useState(
    `/images/${props.topic.id}/${props.item.id}.png`
  )

  return (
    <Image
      width={200}
      height={200}
      className={props.className}
      src={src}
      onError={() => setSrc('/images/placeholder.png')}
      alt={`Logo for ${props.item.title}`}
    />
  )
}
